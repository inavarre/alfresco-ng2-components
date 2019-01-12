/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { TaskListCloudDemoComponent } from './task-list-cloud-demo.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@alfresco/adf-core';
import { ProcessServicesCloudModule } from '@alfresco/adf-process-services-cloud';

const routes: Routes = [
    {
      path: '',
      component: TaskListCloudDemoComponent
    },
    {
        path: ':appName',
        component: TaskListCloudDemoComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CoreModule.forChild(),
        ProcessServicesCloudModule
    ],
    declarations: [
        TaskListCloudDemoComponent
    ]
})
export class TaskListCloudDemoModule {}
