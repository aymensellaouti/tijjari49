import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { FormsModule } from "@angular/forms";
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { PereComponent } from "./components/pere/pere.component";
import { FilsComponent } from "./components/fils/fils.component";
import { CvComponent } from "./cv/cv/cv.component";
import { ItemComponent } from "./cv/item/item.component";
import { ListComponent } from "./cv/list/list.component";
import { CardComponent } from "./cv/card/card.component";
import { NgstyleComponent } from "./directives/ngstyle/ngstyle.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { RainbowDirective } from "./directives/rainbow.directive";
import { DefaultImagePipe } from "./cv/pipes/default-image.pipe";
import { LoggerService } from "./services/logger.Service";
import { TodoComponent } from "./todo/todo/todo.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DetailsComponent } from "./cv/details/details.component";
import { TestformComponent } from "./components/testform/testform.component";
import { LoginComponent } from "./auth/login/login.component";
import { FrontComponent } from "./components/front/front.component";
import { AdminComponent } from "./components/admin/admin.component";
import { TestObservableComponent } from "./components/test-observable/test-observable.component";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { AuthInterceptor } from "./auth/interceptor/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    CardComponent,
    NgstyleComponent,
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    NavbarComponent,
    DetailsComponent,
    TestformComponent,
    LoginComponent,
    FrontComponent,
    AdminComponent,
    TestObservableComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],
  providers: [
    LoggerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
