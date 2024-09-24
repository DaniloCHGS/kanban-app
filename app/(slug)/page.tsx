import { Kanban } from "../components/kanban";
import { Column } from "../components/kanban/column";
import { ViewTask } from "../components/view-task";

export default function Home() {
  return (
    <div className="flex gap-6">
      <Kanban>
        <Column type="todo" quantityTasks={0}></Column>
        <Column type="doing" quantityTasks={0}></Column>
        <Column type="done" quantityTasks={0}></Column>
      </Kanban>
      <ViewTask />
    </div>
  );
}
