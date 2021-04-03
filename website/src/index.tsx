// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App, Initialize} from "@tassilo/boiling-react";
import {WebsiteApplication} from "./Classes";

App.SetApplication(new WebsiteApplication());
Initialize().then().catch(console.error);
