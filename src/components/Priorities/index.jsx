import { PiFireThin, PiPlus } from "react-icons/pi";
import { LuPinOff } from "react-icons/lu";

import { Container, Header, Tasks, ShortTask } from './styles';
import { api } from "../../services/api";
import { useEffect, useState } from "react";


export function Priorities({ click, refresh }) {
  const [ priorities, setPriorities ] = useState([])

  useEffect(() => {
    async function fetchPriorities() {
      const response = await api.get(`/schedules`)
      setPriorities(response.data)
    }

    fetchPriorities()
  }, [refresh])

  return (
    <Container>
      <Header>
        <h1>
          <PiFireThin />
          Prioridades
        </h1>

        <button
          onClick={click} 
          className="scheduled"
        >

            <PiPlus/>
            <small>Agendar</small>
        </button>
      </Header>

      <Tasks>
        {
          priorities &&
            priorities.filter((priority) => priority.priority)
            .map((priority) => (
              <ShortTask  
                type="button"
                key={priority.id}>

                  {priority.title} 
                  {<LuPinOff/>}
              </ShortTask>
            ))
        }
      </Tasks>
    </Container>
  )
}