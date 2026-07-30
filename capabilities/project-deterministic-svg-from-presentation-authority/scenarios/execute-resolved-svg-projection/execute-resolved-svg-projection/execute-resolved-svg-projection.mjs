// @generated
// feature-id: project-deterministic-svg-from-presentation-authority
export function executeResolvedSvgProjection(authority) {
  const canvas = authority.plan.canvas;
  const root = {
    tag: "svg",
    attributes: {
      height: canvas.height,
      viewBox: canvas.viewBox,
      width: canvas.width,
      xmlns: "http://www.w3.org/2000/svg"
    },
    children: []
  };
  for (const operation of authority.plan.operations) {
    if (operation.operation !== "render-rectangle-with-centered-text") {
      throw new Error("PROJECTION_OPERATION_UNRESOLVED");
    }
    const {bounds, style} = operation;
    root.children.push({
      tag: "g",
      attributes: {id: operation.sectionId},
      children: [
        {
          tag: "rect",
          attributes: {
            fill: style.fill,
            height: bounds.height,
            width: bounds.width,
            x: bounds.x,
            y: bounds.y
          },
          children: []
        },
        {
          tag: "text",
          attributes: {
            fill: style.textFill,
            "font-family": style.fontFamily,
            "font-size": style.fontSize,
            "text-anchor": "middle",
            x: bounds.x + bounds.width / 2,
            y: bounds.y + bounds.height / 2 + style.fontSize * 0.3
          },
          text: operation.text,
          children: []
        }
      ]
    });
  }
  return {
    artifactId: authority.plan.artifactId,
    svgTree: root,
    operationCount: authority.plan.operations.length,
    projectedOperationCount: authority.plan.operations.length
  };
}
