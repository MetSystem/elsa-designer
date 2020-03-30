/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Container,
} from 'inversify';
import {
  Activity,
  ActivityDescriptor,
  ExecutionLogEntry,
  Expression,
  ExpressionType,
  Workflow,
  WorkflowDefinition,
  WorkflowStatus,
} from './models';
import {
  ActivityUpdatedArgs,
} from './components/activity-editor/activity-editor';
import {
  ActivityArgs,
  WorkflowArgs,
} from './components/designer/models';
import {
  ExpressionChangedArgs,
} from './components/expression-field/expression-field';
import {
  Notification,
} from './components/notifications/models';
import {
  WorkflowDefinitionSelectedArgs,
} from './components/workflow-definition-picker/workflow-definition-picker';
import {
  WorkflowInstanceSelectedArgs,
} from './components/workflow-instance-picker/workflow-instance-picker';
import {
  WorkflowUpdatedArgs,
} from './components/workflow-properties-editor/workflow-properties-editor';
import {
  ActivityDriver,
  FieldDriver,
} from './services';

export namespace Components {
  interface ElsaActivityEditor {
    'activity'?: Activity;
    'container': Container;
    'showModal': boolean;
  }
  interface ElsaActivityPicker {
    'activityDescriptors': Array<ActivityDescriptor>;
    'container': Container;
    'showModal': boolean;
  }
  interface ElsaConfirmationModal {
    'showModal': boolean;
    'title': string;
  }
  interface ElsaContextMenu {
    'getContext': () => Promise<any>;
    'show': (e: MouseEvent, context?: any) => Promise<void>;
  }
  interface ElsaDesigner {
    'activityDescriptors': Array<ActivityDescriptor>;
    'addActivity': (activity: Activity) => Promise<void>;
    'deleteActivity': (id: string) => Promise<void>;
    'getActivity': (id: string) => Promise<Activity>;
    'getTransform': () => Promise<{ x: number; y: number; scale: number; }>;
    'getWorkflow': () => Promise<Workflow>;
    'readonly': boolean;
    'registerService': (action: (container: Container) => void) => Promise<void>;
    'updateActivity': (activity: Activity) => Promise<void>;
    'workflow': Workflow;
  }
  interface ElsaExecutionLog {
    'activityDescriptors': Array<ActivityDescriptor>;
    'log': Array<ExecutionLogEntry>;
    'workflowDefinition': WorkflowDefinition;
  }
  interface ElsaExpressionField {
    'availableTypes': Array<ExpressionType>;
    'expression': Expression;
    'multiline': boolean;
    'name': string;
    'selectedType': ExpressionType;
  }
  interface ElsaJavascriptExpression {
    'expression': string;
    'multiline': boolean;
    'name': string;
  }
  interface ElsaLiquidExpression {
    'expression': string;
    'multiline': boolean;
    'name': string;
  }
  interface ElsaLiteralExpression {
    'expression': string;
    'multiline': boolean;
    'name': string;
  }
  interface ElsaNotifications {
    'notifications': Array<Notification>;
  }
  interface ElsaWorkflowDefinitionPicker {
    'container': Container;
    'showModal': boolean;
  }
  interface ElsaWorkflowInstancePicker {
    'container': Container;
    'showModal': boolean;
    'status': WorkflowStatus;
    'workflow': Workflow;
  }
  interface ElsaWorkflowPropertiesEditor {
    'container': Container;
    'showModal': boolean;
    'workflow': Workflow;
  }
  interface SampleDesignerHost1 {
    'addActivityDriver': (constructor: new (...args: any[]) => ActivityDriver) => Promise<void>;
    'addFieldDriver': (constructor: new (...args: any[]) => FieldDriver) => Promise<void>;
    'configureServices': (action: (container: Container) => void) => Promise<void>;
    'serverUrl': string;
  }
  interface SampleDesignerHost2 {
    'addActivityDriver': (constructor: new (...args: any[]) => ActivityDriver) => Promise<void>;
    'addFieldDriver': (constructor: new (...args: any[]) => FieldDriver) => Promise<void>;
    'configureServices': (action: (container: Container) => void) => Promise<void>;
    'serverUrl': string;
  }
}

declare global {


  interface HTMLElsaActivityEditorElement extends Components.ElsaActivityEditor, HTMLStencilElement {}
  var HTMLElsaActivityEditorElement: {
    prototype: HTMLElsaActivityEditorElement;
    new (): HTMLElsaActivityEditorElement;
  };

  interface HTMLElsaActivityPickerElement extends Components.ElsaActivityPicker, HTMLStencilElement {}
  var HTMLElsaActivityPickerElement: {
    prototype: HTMLElsaActivityPickerElement;
    new (): HTMLElsaActivityPickerElement;
  };

  interface HTMLElsaConfirmationModalElement extends Components.ElsaConfirmationModal, HTMLStencilElement {}
  var HTMLElsaConfirmationModalElement: {
    prototype: HTMLElsaConfirmationModalElement;
    new (): HTMLElsaConfirmationModalElement;
  };

  interface HTMLElsaContextMenuElement extends Components.ElsaContextMenu, HTMLStencilElement {}
  var HTMLElsaContextMenuElement: {
    prototype: HTMLElsaContextMenuElement;
    new (): HTMLElsaContextMenuElement;
  };

  interface HTMLElsaDesignerElement extends Components.ElsaDesigner, HTMLStencilElement {}
  var HTMLElsaDesignerElement: {
    prototype: HTMLElsaDesignerElement;
    new (): HTMLElsaDesignerElement;
  };

  interface HTMLElsaExecutionLogElement extends Components.ElsaExecutionLog, HTMLStencilElement {}
  var HTMLElsaExecutionLogElement: {
    prototype: HTMLElsaExecutionLogElement;
    new (): HTMLElsaExecutionLogElement;
  };

  interface HTMLElsaExpressionFieldElement extends Components.ElsaExpressionField, HTMLStencilElement {}
  var HTMLElsaExpressionFieldElement: {
    prototype: HTMLElsaExpressionFieldElement;
    new (): HTMLElsaExpressionFieldElement;
  };

  interface HTMLElsaJavascriptExpressionElement extends Components.ElsaJavascriptExpression, HTMLStencilElement {}
  var HTMLElsaJavascriptExpressionElement: {
    prototype: HTMLElsaJavascriptExpressionElement;
    new (): HTMLElsaJavascriptExpressionElement;
  };

  interface HTMLElsaLiquidExpressionElement extends Components.ElsaLiquidExpression, HTMLStencilElement {}
  var HTMLElsaLiquidExpressionElement: {
    prototype: HTMLElsaLiquidExpressionElement;
    new (): HTMLElsaLiquidExpressionElement;
  };

  interface HTMLElsaLiteralExpressionElement extends Components.ElsaLiteralExpression, HTMLStencilElement {}
  var HTMLElsaLiteralExpressionElement: {
    prototype: HTMLElsaLiteralExpressionElement;
    new (): HTMLElsaLiteralExpressionElement;
  };

  interface HTMLElsaNotificationsElement extends Components.ElsaNotifications, HTMLStencilElement {}
  var HTMLElsaNotificationsElement: {
    prototype: HTMLElsaNotificationsElement;
    new (): HTMLElsaNotificationsElement;
  };

  interface HTMLElsaWorkflowDefinitionPickerElement extends Components.ElsaWorkflowDefinitionPicker, HTMLStencilElement {}
  var HTMLElsaWorkflowDefinitionPickerElement: {
    prototype: HTMLElsaWorkflowDefinitionPickerElement;
    new (): HTMLElsaWorkflowDefinitionPickerElement;
  };

  interface HTMLElsaWorkflowInstancePickerElement extends Components.ElsaWorkflowInstancePicker, HTMLStencilElement {}
  var HTMLElsaWorkflowInstancePickerElement: {
    prototype: HTMLElsaWorkflowInstancePickerElement;
    new (): HTMLElsaWorkflowInstancePickerElement;
  };

  interface HTMLElsaWorkflowPropertiesEditorElement extends Components.ElsaWorkflowPropertiesEditor, HTMLStencilElement {}
  var HTMLElsaWorkflowPropertiesEditorElement: {
    prototype: HTMLElsaWorkflowPropertiesEditorElement;
    new (): HTMLElsaWorkflowPropertiesEditorElement;
  };

  interface HTMLSampleDesignerHost1Element extends Components.SampleDesignerHost1, HTMLStencilElement {}
  var HTMLSampleDesignerHost1Element: {
    prototype: HTMLSampleDesignerHost1Element;
    new (): HTMLSampleDesignerHost1Element;
  };

  interface HTMLSampleDesignerHost2Element extends Components.SampleDesignerHost2, HTMLStencilElement {}
  var HTMLSampleDesignerHost2Element: {
    prototype: HTMLSampleDesignerHost2Element;
    new (): HTMLSampleDesignerHost2Element;
  };
  interface HTMLElementTagNameMap {
    'elsa-activity-editor': HTMLElsaActivityEditorElement;
    'elsa-activity-picker': HTMLElsaActivityPickerElement;
    'elsa-confirmation-modal': HTMLElsaConfirmationModalElement;
    'elsa-context-menu': HTMLElsaContextMenuElement;
    'elsa-designer': HTMLElsaDesignerElement;
    'elsa-execution-log': HTMLElsaExecutionLogElement;
    'elsa-expression-field': HTMLElsaExpressionFieldElement;
    'elsa-javascript-expression': HTMLElsaJavascriptExpressionElement;
    'elsa-liquid-expression': HTMLElsaLiquidExpressionElement;
    'elsa-literal-expression': HTMLElsaLiteralExpressionElement;
    'elsa-notifications': HTMLElsaNotificationsElement;
    'elsa-workflow-definition-picker': HTMLElsaWorkflowDefinitionPickerElement;
    'elsa-workflow-instance-picker': HTMLElsaWorkflowInstancePickerElement;
    'elsa-workflow-properties-editor': HTMLElsaWorkflowPropertiesEditorElement;
    'sample-designer-host-1': HTMLSampleDesignerHost1Element;
    'sample-designer-host-2': HTMLSampleDesignerHost2Element;
  }
}

declare namespace LocalJSX {
  interface ElsaActivityEditor {
    'activity'?: Activity;
    'container'?: Container;
    'onActivity-updated'?: (event: CustomEvent<ActivityUpdatedArgs>) => void;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'showModal'?: boolean;
  }
  interface ElsaActivityPicker {
    'activityDescriptors'?: Array<ActivityDescriptor>;
    'container'?: Container;
    'onActivity-selected'?: (event: CustomEvent<any>) => void;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'showModal'?: boolean;
  }
  interface ElsaConfirmationModal {
    'onConfirmed'?: (event: CustomEvent<any>) => void;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'showModal'?: boolean;
    'title'?: string;
  }
  interface ElsaContextMenu {
    'onContext-menu'?: (event: CustomEvent<any>) => void;
  }
  interface ElsaDesigner {
    'activityDescriptors'?: Array<ActivityDescriptor>;
    'onActivity-contextmenu'?: (event: CustomEvent<ActivityArgs>) => void;
    'onActivity-doubleclick'?: (event: CustomEvent<ActivityArgs>) => void;
    'onWorkflow-contextmenu'?: (event: CustomEvent<WorkflowArgs>) => void;
    'readonly'?: boolean;
    'workflow'?: Workflow;
  }
  interface ElsaExecutionLog {
    'activityDescriptors'?: Array<ActivityDescriptor>;
    'log'?: Array<ExecutionLogEntry>;
    'workflowDefinition'?: WorkflowDefinition;
  }
  interface ElsaExpressionField {
    'availableTypes'?: Array<ExpressionType>;
    'expression'?: Expression;
    'multiline'?: boolean;
    'name'?: string;
    'selectedType'?: ExpressionType;
  }
  interface ElsaJavascriptExpression {
    'expression'?: string;
    'multiline'?: boolean;
    'name'?: string;
    'onExpression-changed'?: (event: CustomEvent<ExpressionChangedArgs>) => void;
  }
  interface ElsaLiquidExpression {
    'expression'?: string;
    'multiline'?: boolean;
    'name'?: string;
    'onExpression-changed'?: (event: CustomEvent<ExpressionChangedArgs>) => void;
  }
  interface ElsaLiteralExpression {
    'expression'?: string;
    'multiline'?: boolean;
    'name'?: string;
    'onExpression-changed'?: (event: CustomEvent<ExpressionChangedArgs>) => void;
  }
  interface ElsaNotifications {
    'notifications'?: Array<Notification>;
  }
  interface ElsaWorkflowDefinitionPicker {
    'container'?: Container;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'onWorkflow-definition-version-selected'?: (event: CustomEvent<WorkflowDefinitionSelectedArgs>) => void;
    'showModal'?: boolean;
  }
  interface ElsaWorkflowInstancePicker {
    'container'?: Container;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'onWorkflow-instance-selected'?: (event: CustomEvent<WorkflowInstanceSelectedArgs>) => void;
    'showModal'?: boolean;
    'status'?: WorkflowStatus;
    'workflow'?: Workflow;
  }
  interface ElsaWorkflowPropertiesEditor {
    'container'?: Container;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'onWorkflow-updated'?: (event: CustomEvent<WorkflowUpdatedArgs>) => void;
    'showModal'?: boolean;
    'workflow'?: Workflow;
  }
  interface SampleDesignerHost1 {
    'serverUrl'?: string;
  }
  interface SampleDesignerHost2 {
    'serverUrl'?: string;
  }

  interface IntrinsicElements {
    'elsa-activity-editor': ElsaActivityEditor;
    'elsa-activity-picker': ElsaActivityPicker;
    'elsa-confirmation-modal': ElsaConfirmationModal;
    'elsa-context-menu': ElsaContextMenu;
    'elsa-designer': ElsaDesigner;
    'elsa-execution-log': ElsaExecutionLog;
    'elsa-expression-field': ElsaExpressionField;
    'elsa-javascript-expression': ElsaJavascriptExpression;
    'elsa-liquid-expression': ElsaLiquidExpression;
    'elsa-literal-expression': ElsaLiteralExpression;
    'elsa-notifications': ElsaNotifications;
    'elsa-workflow-definition-picker': ElsaWorkflowDefinitionPicker;
    'elsa-workflow-instance-picker': ElsaWorkflowInstancePicker;
    'elsa-workflow-properties-editor': ElsaWorkflowPropertiesEditor;
    'sample-designer-host-1': SampleDesignerHost1;
    'sample-designer-host-2': SampleDesignerHost2;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'elsa-activity-editor': LocalJSX.ElsaActivityEditor & JSXBase.HTMLAttributes<HTMLElsaActivityEditorElement>;
      'elsa-activity-picker': LocalJSX.ElsaActivityPicker & JSXBase.HTMLAttributes<HTMLElsaActivityPickerElement>;
      'elsa-confirmation-modal': LocalJSX.ElsaConfirmationModal & JSXBase.HTMLAttributes<HTMLElsaConfirmationModalElement>;
      'elsa-context-menu': LocalJSX.ElsaContextMenu & JSXBase.HTMLAttributes<HTMLElsaContextMenuElement>;
      'elsa-designer': LocalJSX.ElsaDesigner & JSXBase.HTMLAttributes<HTMLElsaDesignerElement>;
      'elsa-execution-log': LocalJSX.ElsaExecutionLog & JSXBase.HTMLAttributes<HTMLElsaExecutionLogElement>;
      'elsa-expression-field': LocalJSX.ElsaExpressionField & JSXBase.HTMLAttributes<HTMLElsaExpressionFieldElement>;
      'elsa-javascript-expression': LocalJSX.ElsaJavascriptExpression & JSXBase.HTMLAttributes<HTMLElsaJavascriptExpressionElement>;
      'elsa-liquid-expression': LocalJSX.ElsaLiquidExpression & JSXBase.HTMLAttributes<HTMLElsaLiquidExpressionElement>;
      'elsa-literal-expression': LocalJSX.ElsaLiteralExpression & JSXBase.HTMLAttributes<HTMLElsaLiteralExpressionElement>;
      'elsa-notifications': LocalJSX.ElsaNotifications & JSXBase.HTMLAttributes<HTMLElsaNotificationsElement>;
      'elsa-workflow-definition-picker': LocalJSX.ElsaWorkflowDefinitionPicker & JSXBase.HTMLAttributes<HTMLElsaWorkflowDefinitionPickerElement>;
      'elsa-workflow-instance-picker': LocalJSX.ElsaWorkflowInstancePicker & JSXBase.HTMLAttributes<HTMLElsaWorkflowInstancePickerElement>;
      'elsa-workflow-properties-editor': LocalJSX.ElsaWorkflowPropertiesEditor & JSXBase.HTMLAttributes<HTMLElsaWorkflowPropertiesEditorElement>;
      'sample-designer-host-1': LocalJSX.SampleDesignerHost1 & JSXBase.HTMLAttributes<HTMLSampleDesignerHost1Element>;
      'sample-designer-host-2': LocalJSX.SampleDesignerHost2 & JSXBase.HTMLAttributes<HTMLSampleDesignerHost2Element>;
    }
  }
}


