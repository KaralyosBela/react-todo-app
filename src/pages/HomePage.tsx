import { TodoActionBar } from "../components/TodoActionBar";
import { TodoCounter } from "../components/TodoCounter";
import { TodoFilterBar } from "../components/TodoFilterBar";
import { TodoList } from "../components/TodoList";
import { useGetStatus } from "../features/getId.hook";
import { useTodos } from "../features/todo.hook";
import { Layout } from "../ui/Layout";

 
export const HomePage: React.FC = () => {

  const todos = useTodos();
  const x = useGetStatus(false);
  console.log(x);
  
  return (
    <div>
      <Layout>
        <TodoCounter/>
        <TodoFilterBar />
        <TodoList todos={todos}/>
        <TodoActionBar />
      </Layout>
    </div>
  );
};
