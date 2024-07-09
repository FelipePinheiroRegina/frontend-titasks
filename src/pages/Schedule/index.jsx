import React, { useState, useEffect } from 'react';
import { FiSearch, FiArrowLeft } from "react-icons/fi";
import { Container, Content, Filters, ContainerSchedule, Logo, Bar } from "./styles";
import { HeaderTop } from "../../components/HeaderTop";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { TaskSchedule } from "../../components/TaskSchedule";
import { CreateScheduled } from "../../components/CreateScheduled";
import { Priorities } from "../../components/Priorities";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Schedule() {
  const navigate = useNavigate();
  const [countSchedules, setCountSchedules] = useState([]);

  const stateFilterDone = sessionStorage.getItem('@filterScheduleTitasks') == undefined ? 'all' : sessionStorage.getItem('@filterScheduleTitasks')
  const [done, setDone] = useState(stateFilterDone)

  const [title, setTitle] = useState('');
  const [schedules, setSchedules] = useState(null);
  const [modalScheduledIsOpen, setModalScheduledIsOpen] = useState(false);
  const [refreshPriority, setRefreshPriority] = useState(false);

  function handleBack() {
    navigate('/');
  }

  function handleRefreshPriority() {
    setRefreshPriority(!refreshPriority);
  }

  async function handleClick(id, statePriority, stateDone, whichClick) {
    if (stateDone === 1 && whichClick === 'schedule') {
      return alert('Apenas tarefas pendentes podem ser priorizadas');
    }

    if(whichClick === 'schedule') {
      statePriority = !statePriority
    }

    if(whichClick === 'check') {
      stateDone = !stateDone
    }

    await api.patch(`/schedules/${id}`, { statePriority, stateDone, whichClick });
    handleRefreshPriority();
    fetchSchedules(); // Buscar as tarefas atualizadas
  }

  function handleFilter(option) {
    switch (option) {
      case 'false':
        setDone('false');
        sessionStorage.setItem('@filterScheduleTitasks', 'false')
        break;

      case 'true':
        setDone('true');
        sessionStorage.setItem('@filterScheduleTitasks', 'true')
        break;

      default:
        setDone('all');
        sessionStorage.setItem('@filterScheduleTitasks', 'all')
    }
  }

  const openModalSchedule = () => {
    setModalScheduledIsOpen(true);
  };

  const closeModalSchedule = () => {
    setModalScheduledIsOpen(false);
    handleRefreshPriority()
  };

  async function fetchSchedules() {
    const response = await api.get(`/schedules?title=${title}&done=${done}`);
    setSchedules(response.data);
  }

  useEffect(() => {
    fetchSchedules();
  }, [done, title, refreshPriority]);

  useEffect(() => {
    async function fetchCountSchedules() {
      const response = await api.get(`/schedules`);
      setCountSchedules(response.data);
    }

    fetchCountSchedules();
  }, [refreshPriority]);

  const allCount = [];
  const dooCount = [];
  const doneCount = [];

  countSchedules.forEach(schedule => {
    if (schedule.done === 0) {
      dooCount.push(schedule);
    } else if (schedule.done === 1) {
      doneCount.push(schedule);
    }
    allCount.push(schedule);
  });

  return (
    <Container>
      <HeaderTop />

      <Logo>
        <h1>TI TASKS</h1>
      </Logo>

      <Bar>

        <button onClick={handleBack}>
          <FiArrowLeft />
          <span>Voltar</span>
        </button>
      </Bar>

      <Content>
        <Priorities 
          refresh={refreshPriority}
          click={openModalSchedule} 
        />

        <Input
          onChange={e => setTitle(e.target.value)}
          icon={FiSearch}
          placeholder="Pesquisar pelo nome da conta"
        />

        <Filters>
          <Filter
            title={`Tudo (${allCount.length})`}
            onClick={() => handleFilter('all')}
            selected={done === 'all'}
          />

          <Filter
            title={`Pendentes (${dooCount.length})`}
            onClick={() => handleFilter('false')}
            selected={done === 'false'}
          />

          <Filter
            title={`Finalizados (${doneCount.length})`}
            onClick={() => handleFilter('true')}
            selected={done === 'true'}
          />
        </Filters>

        <ContainerSchedule>
          {schedules && schedules.map(schedule => (
            <TaskSchedule
              key={schedule.id}
              data={schedule}
              clickSchedule={() => handleClick(schedule.id, schedule.priority, schedule.done, 'schedule')}
              clickCheck={() => handleClick(schedule.id, schedule.priority, schedule.done, 'check')}
            />
          ))}
        </ContainerSchedule>

        <CreateScheduled
          isOpen={modalScheduledIsOpen}
          onRequestClose={closeModalSchedule}
        />
      </Content>

      <Header className="headerBot" />
    </Container>
  );
}
