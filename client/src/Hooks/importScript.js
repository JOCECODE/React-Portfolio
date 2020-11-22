const importScript = scriptLink=> {
    const script = document.createElement('script');
    script.src = scriptLink;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }; 
};
export default importScript;