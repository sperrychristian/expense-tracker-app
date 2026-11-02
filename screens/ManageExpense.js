import { View, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useLayoutEffect } from "react";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";


export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  function deleteExpenseHandler() {
  navigation.goBack();
}

function cancelHandler() {
  navigation.goBack();
}

function confirmHandler() {
  navigation.goBack();
}

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
  <View style={styles.container}>
    <View style={styles.buttons}>
     <Button style={styles.button} mode='flat' onPress={cancelHandler}>
      Cancel
      </Button> 
      <Button style={styles.button} onPress={confirmHandler}>
        {isEditing? 'Update' : 'Add'}
      </Button>
    </View>
    {isEditing && (
      <View style = {styles.deleteContainer}>
        <IconButton 
        icon='trash'
        color={GlobalStyles.colors.error500}
        siz={36}
        onPress={deleteExpenseHandler}/>
        </View>
    )}
  </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
