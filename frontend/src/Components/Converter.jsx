import React from "react";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { Button, Box, Flex, Select, Grid, Text } from "@chakra-ui/react";
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
  "script.cpp": {
    name: "script.cpp",
    language: "c++",
    defaultValue: "// Write your C++ code here",
  },
  "Main.java": {
    name: "Main.java",
    language: "java",
    defaultValue: "// Write your Java code here",
  },
};

export const Converter = () => {
  const [fileName, setFileName] = useState("script.js");
  const [language, setLanguage] = useState("");
  const [generatedOutput, setGeneratedOutput] = useState("");

  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      axios
        .post("https://code-converter-ddsv.onrender.com/code/output", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
          setLoading(false);
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
      setLoading(true);
      axios
        .post("https://code-converter-ddsv.onrender.com/code/convert", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
          setLoading(false);
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
      setLoading(true);
      axios
        .post("https://code-converter-ddsv.onrender.com/code/debug", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
          setLoading(false);
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
      setLoading(true);
      axios
        .post("https://code-converter-ddsv.onrender.com/code/quality", obj)
        .then((res) => {
          setGeneratedOutput(res.data);
          console.log(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };


  const handleReset = () => {

    setGeneratedOutput("")

  }

  return (
    // <div style={{ backgroundColor: "#16213E" }}>
    // <Text mb="30" fontSize={"5xl"} color="white">
    //   Code Converter
    // </Text>

    <Flex direction={"column"} bg="#183D3D" h="100vh" justify={"space-around"}>
      <Text
        fontFamily={"'Press Start 2P', cursive;"}
        color="white"
        fontSize={"5xl"}
      >
        Code Converter
      </Text>
      <Flex justify={"space-evenly"}>
        <Flex
          direction={"column"}
          // h="100vh"
          justify="center"
          width="45%"
          bg="rgb(30,30,30)"
          gap={"20"}
        >
          <Flex justify="space-evenly" align="center" mt="10">
            <Button
              bg="#5C8374"
              color="white"
              onClick={() => setFileName("script.js")}
            >
              Switch to Javascript
            </Button>
            <Button
              bg="#5C8374"
              color="white"
              onClick={() => setFileName("script.py")}
            >
              Switch to Python
            </Button>
            <Button
              bg="#5C8374"
              color="white"
              onClick={() => setFileName("script.cpp")}
            >
              Switch to C++
            </Button>
            <Button
              bg="#5C8374"
              color="white"
              onClick={() => setFileName("Main.java")}
            >
              Switch to Java
            </Button>
          </Flex>
          <Box>
            <Editor
              theme="vs-dark"
              height="70vh"
              onMount={handleEditor}
              path={file.name}
              defaultLanguage={file.language}
              defaultValue={file.defaultValue}
            />
          </Box>
        </Flex>
        <Flex
          direction={"column"}
          // h="100vh"
          justify="space-evenly"
          width="45%"
          bg="rgb(30,30,30)"
        >
          <Flex
            justify="space-evenly"
            direction={"column"}
            align="center"
            gap="10"
            p="5"
            
          >
            <Flex justify="space-around" align="center" w="100%">
              <Button bg="#5C8374" color="white" onClick={handleOutput}>
                Get Output
              </Button>

              <Button bg="#5C8374" color="white" onClick={handleQuality}>
                Check Code Quality
              </Button>
              <Button bg="#5C8374" color="white" onClick={handleDebug}>
                Debug Code
              </Button>

              <Button bg="#5C8374" color="white" onClick={handleReset}>
                Reset
              </Button>
            </Flex>

            <Flex justify="space-around" align="center" w="100%">
              <Select
                color="white"
                w="40%"
                m="auto"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select language to convert</option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
              </Select>
              <Button
                bg="#5C8374"
                color="white"
                w="40%"
                m="auto"
                onClick={handleConvert}
              >
                Convert Code
              </Button>
            </Flex>
          </Flex>


          
          {loading ?
          <Flex justify = "center" align={"center"} height="70vh" >
          <h1 style={{color : "white"}} >Loading....</h1>
          </Flex>
          :
          <Box >
          <Editor
              theme="vs-dark"
              height="70vh"
              value={generatedOutput}
              options={{
                readOnly: true,
              }}
            />
            </Box>}
            
          
        </Flex>
      </Flex>
    </Flex>
    // </div>
  );
};
