import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { CvComponent } from "./cv/cv/cv.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { SecondComponent } from "./second/second.component";
import { DetailsComponent } from "./cv/details/details.component";
import { LoginComponent } from "./auth/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [{ path: "word", component: MiniWordComponent }],
  },
  { path: "", component: FirstComponent },
  { path: "cv", component: CvComponent },
  { path: "cv/:id", component: DetailsComponent },
  { path: "todo", component: TodoComponent },

  { path: "color", component: ColorComponent },
  { path: "login", component: LoginComponent },
  { path: ":haja", component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
