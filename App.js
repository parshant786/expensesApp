import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecentExpensesScreen } from "./Screens/RecentExpenses";
import { AllExpensesScreen } from "./Screens/AllExpenses";
import { ManageExpensesScreen } from "./Screens/ManageExpenses";
import { GlobalStyles } from "./constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "./components/ui/IconButton";
import { ExpensesContextProvider } from "./store/ExpensesContext";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ExpensesOverView = () => {
  const handlePress = (navigation) => {
   
    navigation.navigate("ManageExpenses");
  };
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: GlobalStyles.colors.accent500,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: ({ size, tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={handlePress.bind(this, navigation)}
          />
        ),
      })}
    >
      <Tab.Screen name="All Expenses" component={AllExpensesScreen} />
      <Tab.Screen name="Recents Expenses" component={RecentExpensesScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverView"
            options={{ headerShown: false }}
            component={ExpensesOverView}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}
