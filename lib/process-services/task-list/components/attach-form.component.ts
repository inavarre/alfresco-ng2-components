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

import { LogService } from '@alfresco/adf-core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form } from '../models/form.model';
import { Observable } from 'rxjs/Observable';
import { TaskListService } from './../services/tasklist.service';

@Component({
    selector: 'adf-attach-form',
    templateUrl: './attach-form.component.html',
    styleUrls: ['./attach-form.component.scss']
})

export class AttachFormComponent implements OnInit {
    constructor(private taskService: TaskListService,
                private logService: LogService) { }

    @Input()
    taskDetails;

    /** Emitted when the "Cancel" button is clicked. */
    @Output()
    cancelAttachForm: EventEmitter<void> = new EventEmitter<void>();

    /** Emitted when the form associated with the form task is attached. */
    @Output()
    completeAttachForm: EventEmitter<void> = new EventEmitter<void>();

    /** Emitted when an error occurs. */
    @Output()
    error: EventEmitter<any> = new EventEmitter<any>();

    forms: Form[];

    formKey: number;

    ngOnInit() {
        this.loadFormsTask();
    }

    onCancelButtonClick(): void {
        this.cancelAttachForm.emit();
    }

    onAttachFormButtonClick(): void {
        this.completeAttachForm.emit();
        this.attachForm(this.taskDetails.id, this.formKey);
    }

    private loadFormsTask(): void {
        this.taskService.getFormList().subscribe((res: Form[]) => {
                this.forms = res;
            },
            (err) => {
                this.error.emit(err);
                this.logService.error('An error occurred while trying to get the forms');
            });
    }

    private attachForm(taskId: string, formKey: number): Observable<any> {
        let response = Observable.of();
        if (taskId && formKey) {
            response = this.taskService.attachFormToATask(taskId, formKey);
        }
        return response;
    }
}