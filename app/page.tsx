import { Kanban } from "./components/kanban";
import { Column } from "./components/kanban/column";
import { Task } from "./components/kanban/task";

export default function Home() {
  return (
    <div className="flex gap-6">
      <Kanban>
        <Column type="todo" quantityTasks={1}>
          <Task
            title="Teste 1"
            substasks={{
              done: 1,
              quantity: 2,
            }}
          />
          <Task title="Teste 2" />
          <Task title="Teste 3" />
        </Column>
        <Column type="doing" quantityTasks={1}>
          <Task title="Teste 1" />
          <Task title="Teste 2" />
          <Task title="Teste 3" />
        </Column>
        <Column type="done" quantityTasks={1}>
          <Task title="Teste 1" />
          <Task title="Teste 2" />
          <Task title="Teste 3" />
        </Column>
      </Kanban>
    </div>
  );
}
