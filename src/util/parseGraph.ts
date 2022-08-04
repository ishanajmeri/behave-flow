import { Edge, Node } from "react-flow-renderer";
import { GraphJSON } from "../types";

function camelize(str: string) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export const parseGraph = (graph: GraphJSON): [Node[], Edge[]] => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  let x = 0;

  graph.forEach((nodeJSON, ix) => {
    const node = {
      id: String(ix),
      type: camelize(nodeJSON.type.replace("/", " ")),
      position: { x, y: 0 },
      data: {} as { [key: string]: any },
    };

    nodes.push(node);

    if (nodeJSON.inputs) {
      for (const [inputKey, input] of Object.entries(nodeJSON.inputs)) {
        if (input.links !== undefined) {
          input.links.forEach((link) => {
            const source = String(link.node);
            const target = String(ix);
            const id = `e${source}-${target}`;
            const sourceHandle = link.socket;
            const targetHandle = inputKey;
            edges.push({ id, source, sourceHandle, target, targetHandle });
          });
        }
        if (input.value !== undefined) {
          node.data[inputKey] = input.value;
        }
      }
    }

    // TODO better auto positioning
    x += 250;
  });

  return [nodes, edges];
};