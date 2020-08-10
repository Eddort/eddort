
const React = require("react");
const QAPI = require("./qapi").default;
const { window, document, extend } = require("ssr-window");

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    },
    pluginOptions
) => {
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    ,
  ]),
  setPostBodyComponents([
        <script
            key="QAPI"
            dangerouslySetInnerHTML={{
                __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
            }}
        />,
  ])
}
