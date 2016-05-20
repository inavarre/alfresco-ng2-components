///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

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

import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AlfrescoSettingsService, AlfrescoTranslationService, AlfrescoTranslationLoader } from 'ng2-alfresco-core/services';
import { ALFRESCO_ULPOAD_COMPONENT, UploadService } from 'ng2-alfresco-upload/ng2-alfresco-upload';


@Component({
    selector: 'my-app',
    template: `<alfresco-upload-button [showDialogUpload]="true"
                                       [showUdoNotificationBar]="true"
                                       [uploadFolders]="false"
                                       [multipleFiles]="false">
               </alfresco-upload-button>

               <br><br>

               <alfresco-upload-button [showDialogUpload]="true"
                                       [showUdoNotificationBar]="true"
                                       [uploadFolders]="true"
                                       [multipleFiles]="false">
               </alfresco-upload-button>

               <br><br>

               <alfresco-upload-button [showDialogUpload]="true"
                                       [showUdoNotificationBar]="true"
                                       [uploadFolders]="false"
                                       [multipleFiles]="true">
               </alfresco-upload-button>

               <br><br>

               <alfresco-upload-drag-area [showDialogUpload]="true" >
                     <div style="width: 200px; height: 100px; border: 1px solid #888888">
                         DRAG HERE
                     </div>
               </alfresco-upload-drag-area>`,
    directives: [ALFRESCO_ULPOAD_COMPONENT]
})
export class MyDemoApp {
    constructor(alfrescoSettingsService: AlfrescoSettingsService) {
        alfrescoSettingsService.host = 'http://192.168.99.100:2323';
    }
}

bootstrap(MyDemoApp, [
    HTTP_PROVIDERS,
    AlfrescoTranslationService,
    AlfrescoTranslationLoader,
    AlfrescoSettingsService,
    UploadService
]);
