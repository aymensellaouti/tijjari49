import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { CvComponent } from "./cv/cv/cv.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { SecondComponent } from "./second/second.component";
import { DetailsComponent } from "./cv/details/details.component";

const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "cv", component: CvComponent },
  { path: "cv/:id", component: DetailsComponent },
  { path: "todo", component: TodoComponent },
  { path: "word", component: MiniWordComponent },
  { path: "color", component: ColorComponent },
  { path: ":haja", component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
