import { FiCheckCircle, FiCircle, FiCalendar } from "react-icons/fi";
import { LuPinOff, LuPin } from "react-icons/lu";
import { LiaCoinsSolid } from "react-icons/lia";
import { Container, Details, DateAndPrice } from "./styles";
import { useTheme } from "styled-components";

export function TaskSchedule({ data, clickSchedule, clickCheck }) {
    const { COLORS } = useTheme();

    function formatDate(date) {
        let format = date.split('-').reverse().join('/');
        return format;
    }

    return (
        <Container $done={data.done}>
            <div
                className="check"
                onClick={clickCheck}
            >
                {data.done ? <FiCheckCircle /> : <FiCircle />}
            </div>
            
            <Details>
                <span>{data.title}</span>
                <small>{data.description && data.description}</small>
            </Details>

            <DateAndPrice>
                <span>
                    {data.scheduled && (
                        <>
                            <FiCalendar />
                            {formatDate(data.scheduled)}
                        </>
                    )}
                </span>

                <span>
                    {data.price && (
                        <>
                            <LiaCoinsSolid />
                            {data.price}
                        </>
                    )}
                </span>
            </DateAndPrice>

            <div
                onClick={clickSchedule}
                style={{ cursor: 'pointer', display: 'inline-block' }}
            >
                {data.priority ?
                    data.done ? <LuPin color={COLORS.GRAY_400} /> : <LuPinOff color={COLORS.RED_200} /> :
                    <LuPin color={COLORS.GRAY_400} />
                }
            </div>
        </Container>
    );
}
