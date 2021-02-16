import React from "react";
import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
import { WebView } from 'react-native-webview';
import { connect } from "react-redux";
import { setCartToInitialState, editCartRequest, setOrderInPlace, setTimeStampAtWhichOrderPlaced, setCardName } from "../../redux/actionCreators";
import {AuthedUser} from '../../redux/reducers/userAuthed'
import api from '../../utils/apiUtils/api'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      status: "Pending"
  };
  }

    handleResponse = async (data) => {
        if (data.title === "success") {
            this.setState({ showModal: false, status: "Complete" });
            await api.placeOrderWithPaypal(this.props.authedUser.authedUser.token)
              .then(res=>console.log("res from placeOrderWithPaypal",res))
              .catch(error=>console.log("error from placeOrderWithPaypal",error))
            await this.props.dispatch(setCartToInitialState())
            await this.props.dispatch(setCardName(""))
            console.log("CHECKER")
            this.props.dispatch(setTimeStampAtWhichOrderPlaced(Date.now()))
            this.props.dispatch(setOrderInPlace(true))
            this.props.navigation.navigate("OrderStatus")
        } else if (data.title === "cancel") {
            this.setState({ showModal: false, status: "Cancelled" });
              // this.setState(()=>(
              //   { showModal: false, status: "Cancelled" }
              //   ),()=>{
              //     setTimeout(()=>{
              //       this.props.navigation.navigate("HomeScreen")
              //     },3000)
              //   });
        } else {
            return;
        }
    };
    render() {
      
      console.log("mapStatetoprop",this.props.orderStatusReducer)
      const { isOrderInPlace } = this.props.orderStatusReducer
      const { cart } = this.props.cartReducer;
        return (
            <View style={{ marginTop: 100 }}>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        source={{ uri: "https://snagit-server.herokuapp.com/paypal" }}
                        onNavigationStateChange={data =>
                            this.handleResponse(data)
                        }
                        injectedJavaScript={`document.f1.submit()`}
                    />
                </Modal>
                
                <TouchableOpacity
                    style={{ width: 400, height: 100 }}
                    onPress={() => {
                      if(!cart.length){
                        alert("Cart is empty!")
                        return
                      }else if(isOrderInPlace){
                        alert("Currently there is an order processing for you. Try again when it finishes!")
                        return
                      }
                      this.setState({ showModal: true })
                    }}
                >
                  <Text style={{fontSize:25,fontFamily:'MazzardH-Regular'}} >Click Here! To Proceed PayMent with Paypal</Text>
                </TouchableOpacity>
                {/* <Text style={{fontSize:30,fontFamily:'MazzardH-Regular'}} > To Proceed PayMent with Paypal</Text> */}
                
                <Text style={{fontSize:25}} >Payment Status: 
                  <Text style={{
                    fontSize:30,
                    color:this.state.status=='Complete'?'green':'red'}} >{this.state.status}</Text>
                </Text>

                {
                  this.state.status=="Complete" && <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")} >
                  <Text style={{
                    width: 267,
                    height: 45,
                    fontFamily: 'MazzardH-Bold',
                    // textAlign: 'center',
                    marginTop: 82,
                    marginLeft: 56,
                    paddingTop: 12,
                    paddingLeft: 75,
                    backgroundColor: 'black',
                    borderRadius: 120,
                    color: '#FFF',
                  }} >Go Back To Home</Text>
                </TouchableOpacity>
                }
            </View>
        );
    }
}

function mapStateToProps (state) {

  return {
    authedUser: state.authedUser,
    cartReducer: state.cartReducer,
    allProducts: state.productReducer,
    orderStatusReducer: state.orderStatusReducer
  }

}

export default connect(mapStateToProps,null)(App)