const TodoAdd = ({
    placeholder,
    leftIcon,
    buttonText,
    inputEl,
    handleAddTodoListItem,
  }) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        backgroundColor="gray.400"
        ref={inputEl}
      />
      <button onClick={handleAddTodoListItem}>{leftIcon} {buttonText}</button>
    </>
  )
}

export default TodoAdd;
