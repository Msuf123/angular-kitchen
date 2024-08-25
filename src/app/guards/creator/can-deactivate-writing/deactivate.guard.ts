import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { DisplayMessageService } from '../../../services/creator-sections/display-save-draft/display-message.service';
import { SaveChangesService } from '../../../services/creator-sections/should-save-changes/save-changes.service';
import { DisplaySaveDraftComponent } from '../../../components/creator-sections/display-save-draft/display-save-draft.component';

export const deactivateGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
