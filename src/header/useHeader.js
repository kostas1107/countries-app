const useHeader = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return { refreshPage };
};

export default useHeader;
