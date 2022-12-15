import { StyleSheet } from "react-native";
const COLOR_RED = "#CE1226";
const COLOR_WHITE = "#FFFFFF";


export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    flexDirection: "column",
    backgroundColor: COLOR_WHITE,
    maxHeight: "90%",
    borderRadius: 10,
    width: "85%",
  },
  modalHeader: {
    flexDirection: "column",
    borderColor: COLOR_RED,
    borderBottomWidth: 2,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLOR_RED,
  },
  modalHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  modalTitle: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    color:  '#fff',
  },
  modalContent: {
    padding: 10,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,

  },
  item: {
    margin: 5,
    width: "20%",
    height: 60,
    borderColor: COLOR_RED,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  selectedItem: {
    backgroundColor: COLOR_RED,
  },
});
