const importScript = scriptLink=> {
    const script = document.createElement('script');
    script.src = scriptLink;
    script.async = true;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }; 
};
export default importScript;