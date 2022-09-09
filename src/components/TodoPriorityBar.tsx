import { Dispatch, SetStateAction } from "react";
import classes from "../components/TodoPriorityBar.module.scss";

interface Props {
    setPrior: Dispatch<SetStateAction<string>>
}

export const TodoPriorityBar: React.FC<Props> = ({setPrior}) => {
    return  <>
        <div className={classes.priorityButtons}>
        <button className={classes.low} onClick={()=>setPrior("LOW")}>Low priority</button>
        <button className={classes.normal} onClick={()=>setPrior("NORMAL")}>Normal priority</button>
        <button className={classes.high} onClick={()=>setPrior("HIGH")}>High priority</button>
        </div>
    </>
}