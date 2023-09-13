import React from "react";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { Button, Box, Flex, Select, Grid } from "@chakra-ui/react";
import axios from "axios";

const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    defaultValue: "// Write your Javascript code here",
  },
  "script.py": {
    name: "script.py",
    language: "python",
    defaultValue: "// Write your Python code here",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    defaultValue: "// <div> </div>",
  },
};

export const Converter = () => {
  const [fileName, setFileName] = useState("script.js");
  const [language, setLanguage] = useState("");
  const [generatedOutput, setGeneratedOutput] = useState("");
  const editorRef = useRef(null);
  const file = files[fileName];

  function handleEditor(editor, monaco) {
    editorRef.current = editor;
  }

  const handleOutput = () => {
    if (editorRef.current.getValue() === "") {
      alert("Please add code to convert");
    } else {
      let obj = {
        code: editorRef.current.getValue(),
      };
      console.log(obj);
      axios
        .post("http://localhost:8080/code/output", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const handleConvert = () => {
    if (language == "") {
      alert("Please Select any Language to convert");
    } else if (editorRef.current.getValue() === "") {
      alert("Please add code to convert");
    } else {
      let obj = {
        generatedLanguage: language,
        code: editorRef.current.getValue(),
      };
      console.log(obj);
      axios
        .post("http://localhost:8080/code/convert", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  console.log(generatedOutput);

  const handleDebug = () => {
    if (editorRef.current.getValue() === "") {
      alert("Please add code to convert");
    } else {
      let obj = {
        code: editorRef.current.getValue(),
      };
      console.log(obj);
      axios
        .post("http://localhost:8080/code/debug", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  console.log(generatedOutput, "output");

  const handleQuality = () => {
    if (editorRef.current.getValue() === "") {
      alert("Please add code to convert");
    } else {
      let obj = {
        code: editorRef.current.getValue(),
      };
      console.log(obj);
      axios
        .post("http://localhost:8080/code/quality", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <Flex justify={"space-evenly"}>
      <Flex
        border="1px solid blue"
        direction={"column"}
        h="100vh"
        justify="space-evenly"
        width="45%"
      >
        <Flex justify="space-evenly" align="center">
          <Button onClick={() => setFileName("script.js")}>
            Switch to Javascript
          </Button>
          <Button onClick={() => setFileName("script.py")}>
            Switch to Python
          </Button>
          <Button onClick={() => setFileName("index.html")}>
            Switch to HTML
          </Button>
        </Flex>
        <Box>
          <Editor
            theme="vs-light"
            height="80vh"
            border="1px solid red"
            onMount={handleEditor}
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.defaultValue}
          />
        </Box>
      </Flex>
      <Flex
        border="1px solid blue"
        direction={"column"}
        h="100vh"
        justify="space-evenly"
        width="45%"
      >
        <Grid gridTemplateColumns="repeat(3,1fr)">
          <Button onClick={handleOutput}>Get Output</Button>
          <Select onChange={(e) => setLanguage(e.target.value)}>
            <option value="">Select language to convert</option>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </Select>
          <Button onClick={handleConvert}>Convert Code</Button>
          <Button onClick={handleDebug}>Debug Code</Button>
          <Button onClick={handleQuality}>Check Code Quality</Button>
        </Grid>
        <Box>
          <Editor
            theme="vs-light"
            height="80vh"
            border="1px solid red"
            value={generatedOutput}
            options={{
              readOnly: true,
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
