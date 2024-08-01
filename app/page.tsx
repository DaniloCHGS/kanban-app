import { Kanban } from "./components/kanban";
import { Column } from "./components/kanban/column";
import { Task } from "./components/kanban/task";
import { ViewTask } from "./components/view-task";

export default function Home() {
  return (
    <div className="flex gap-6">
      <Kanban>
        <Column type="todo" quantityTasks={1}>
          <Task
            id="qwe"
            title="Teste 1"
            substasks={{
              done: 1,
              quantity: 2,
            }}
          />
          <Task id="asd" title="Teste 2" />
          <Task id="zxc" title="Teste 3" />
        </Column>
        <Column type="doing" quantityTasks={1}>
          <Task id="rty" title="Teste 1" />
          <Task id="fgh" title="Teste 2" />
          <Task id="fskdjhfksj" title="Teste 3" />
        </Column>
        <Column type="done" quantityTasks={1}>
          <Task id="binpmoipghoj" title="Teste 1" />
          <Task id="quwieozmxcuih" title="Teste 2" />
          <Task id="qwiepqwoeskskddfjsdvc" title="Teste 3" />
        </Column>
      </Kanban>
      <ViewTask />
    </div>
  );
}
