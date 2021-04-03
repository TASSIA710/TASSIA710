// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App, Initialize} from "@tassilo/boiling-react";
import {Website} from "./Classes";

import "./CSS/Application.scss";

App.SetApplication(new Website());
Initialize().then().catch(console.error);
