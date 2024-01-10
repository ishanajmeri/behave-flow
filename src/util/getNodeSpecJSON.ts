import {
  InputSocketSpecJSON,
  NodeSpecJSON,
  OutputSocketSpecJSON,
  registerCoreProfile,
  registerSceneProfile,
  Registry,
  writeNodeSpecsToJSON
} from 'behave-graph';

let nodeSpecJSON: NodeSpecJSON[] | undefined = undefined;

export const getNodeSpecJSON = (): NodeSpecJSON[] => {
  if (nodeSpecJSON === undefined) {
    const registry = new Registry();
    registerCoreProfile(registry);
    registerSceneProfile(registry);
    nodeSpecJSON = writeNodeSpecsToJSON(registry);
  }
  nodeSpecJSON.push(...newNode);
  return nodeSpecJSON;
};

interface InputSocketSpecJSONNew extends InputSocketSpecJSON {
  type?: string;
}

interface OutputSocketSpecJSONNew extends OutputSocketSpecJSON {
  type?: string;
}
interface NodeSpecJSONNew extends NodeSpecJSON {
  inputs: InputSocketSpecJSONNew[];
  outputs: OutputSocketSpecJSONNew[];
}

export const newNode: NodeSpecJSONNew[] = [
  {
    type: 'publish_event',
    category: 'Action',
    label: 'Publish event',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'listen_event',
    category: 'Action',
    label: 'Listen event',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'play_sound',
    category: 'Action',
    label: 'play sound',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'on_click',
    category: 'Event',
    label: 'on Click',
    inputs: [
      {
        name: 'frame_id',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'on_drag',
    category: 'Event',
    label: 'on Drag',
    inputs: [
      {
        name: 'frame_id',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'on_drag_start',
    category: 'Event',
    label: 'on Drag Start',
    inputs: [
      {
        name: 'frame_id',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'on_drop',
    category: 'Event',
    label: 'on Drop',
    inputs: [
      {
        name: 'frame_id',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'toggle_value',
    category: 'Action',
    label: 'toggle value',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'variable',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'string'
      }
    ]
  },
  {
    type: 'increment',
    category: 'Action',
    label: 'Increment value',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'variable',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      },
      {
        name: 'increment_by',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'string'
      }
    ]
  },
  {
    type: 'decrement',
    category: 'Action',
    label: 'Decrement value',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'variable',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      },
      {
        name: 'decrement_by',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'string'
      }
    ]
  },
  {
    type: 'get_value_at_path',
    category: 'Action',
    label: 'get value at path',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'object/array',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'path',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'set_value_at_path',
    category: 'Action',
    label: 'set value at path',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'object/array',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'path',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'get_value_at_index',
    category: 'Action',
    label: 'get value at path',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'array',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'index',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'set_value_at_index',
    category: 'Action',
    label: 'set value at path',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'array',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'index',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'set_value',
    category: 'Action',
    label: 'set value',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'object',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'get_value_in_table',
    category: 'Action',
    label: 'get value in table',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'table',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'row',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      },
      {
        name: 'col',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'scroll_to_frame',
    category: 'Action',
    label: 'get value in table',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'frame_id',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'string'
      }
    ]
  },
  {
    type: 'set_value_in_table',
    category: 'Action',
    label: 'set value in table',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'table',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'row',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      },
      {
        name: 'col',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'table_row_count',
    category: 'Action',
    label: 'get table row count',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'table',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'string'
      }
    ]
  },
  {
    type: 'table_col_count',
    category: 'Action',
    label: 'get table col count',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'table',
        valueType: 'variable',
        type: 'object',
        defaultValue: ' '
      },
      {
        name: 'row_index',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'string'
      }
    ]
  },
  {
    type: 'code_snippet',
    category: 'Action',
    label: 'code snippet',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'code',
        valueType: 'variable',
        type: 'textarea',
        defaultValue: ' '
      },
      {
        name: 'variables',
        valueType: 'variable',
        type: 'string',
        defaultValue: ' '
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      },
      {
        name: 'output',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'variable',
    category: 'Variable',
    label: 'Variable',
    inputs: [
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'defaultValue',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'result',
        valueType: 'variable',
        type: 'string'
      }
    ]
  },
  {
    type: 'variable_set',
    category: 'Variable',
    label: 'Variable set',
    inputs: [
      {
        name: 'flow',
        valueType: 'flow',
        defaultValue: ''
      },
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'defaultValue',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'variable_object',
    category: 'Variable',
    label: 'Object Variable',
    inputs: [
      {
        name: 'name',
        valueType: 'variable',
        type: 'object',
        defaultValue: ''
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'object',
        defaultValue: ''
      },
      {
        name: 'defaultValue',
        valueType: 'variable',
        type: 'object',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'result',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'variable_textarea',
    category: 'Variable',
    label: 'Textarea Variable',
    inputs: [
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'value',
        valueType: 'variable',
        type: 'textarea',
        defaultValue: ''
      },
      {
        name: 'defaultValue',
        valueType: 'variable',
        type: 'textarea',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'result',
        valueType: 'variable',
        type: 'object'
      }
    ]
  },
  {
    type: 'Frame_id',
    category: 'Variable',
    label: 'Frame Id',
    inputs: [
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      }
    ],
    outputs: [
      {
        name: 'flow',
        valueType: 'flow'
      }
    ]
  },
  {
    type: 'function',
    category: 'Logic',
    label: 'Function',
    inputs: [
      {
        name: 'name',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'compute function',
        valueType: 'variable',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'variables',
        valueType: 'flow'
      }
    ],
    outputs: [
      {
        name: 'result',
        valueType: 'function'
      }
    ]
  }
];
