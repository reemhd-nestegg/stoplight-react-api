function API({ openApi }: any) {
  return (
    <elements-api
      apiDescriptionUrl={openApi}
      router="hash"
      layout="sidebar"
    />
  );
}

export default API;