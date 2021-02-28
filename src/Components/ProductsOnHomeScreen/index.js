import React, { useEffect, useState } from 'react'
import { View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import BottomSearch from '../BottomSearch'
import { 
  CategoryWidget,
  ProductsDisplay,
  CategoryWidgetSeparator,
  ProductsCategory,
  ProductContainer,
  ProductsWrapper,
  ProductInfoIcon,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Wrapper,
  FromText
} from './StyledComponent'
import unfilledCart from '../../assets/images/unfilledCart.png'
import filledCart from '../../assets/images/filled.jpg'
import prodInfoIcon from '../../assets/productHome/prodInfo.png'
import loader from '../../assets/productHome/loader.png'
import { useDispatch, useSelector } from 'react-redux'
import { handleToggleCart, editCartRequest, totalAmount } from '../../redux/actionCreators'
export default ProductsHome = ({navigation, route, category}) => {

  const dispatch = useDispatch()
  const {productReducer} = useSelector(state=>state)
  const {products} = useSelector(state=>state.productReducer)
  const {allProducts} = useSelector(state=> state.productReducer)
  const {cart, Total} = useSelector(state=>state.cartReducer)
  const {authedUser} = useSelector(state=>state.authedUser)

  
  const [showSearchBar,setShowSearchBar] = useState(false)
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [ref, setRef] = useState(null);


  console.log("in producthomescreen", {allProducts, products,productReducer})

  const [activeCategory, setActiveCategory] = useState(products[category])

  useEffect(()=>{
    const cartItemIds = cart.map(c=>c.product_id)
    const updatedProducts = products[category].map(prod=>{
      console.log("matched",cartItemIds.includes(prod._id))
      if(!cartItemIds.includes(prod._id)){
          return {
            ...prod,
            inCart: false
            }
          }else{ 
            return  {
              ...prod,
              inCart: true
            }
          }
    })
    setActiveCategory(updatedProducts)
    
  },[category,products])

  const handleCartBtn = (id,cat,price) => {

    const cartItemIds = cart.map(c=>c.product_id)
    const updatedProducts = activeCategory.map(prod=>{
      console.log("condition",cartItemIds.includes(id))
      if(prod._id===id){
          if(cartItemIds.includes(id)){
          return {
            ...prod,
            inCart: false
            }
          }else{ 
            return  {
              ...prod,
              inCart: true
            }
          }
        }else{
          return prod
        }
    })
    console.log("updateProd---",updatedProducts)
    setActiveCategory(updatedProducts)
    if(authedUser.token){

      let inCart = false;
      let amountAfterSubtracting = 0;
      console.log("cart just above",cart)
      cart.forEach(c=>{
          if(id===c.product_id || id==c.product){
              inCart = true
              amountAfterSubtracting = Number(price) * Number(c.quantity)
          }
      })

      console.log("amountAfterSubtracting0",amountAfterSubtracting)
      console.log("inCart",inCart)

      let fnlCart = inCart ? cart.map(c=>{
        if(id==c.product_id || id==c.product){
          return {
            ...c,
            quantity : "0",
          }
        }else{
          return c
        }
      }) : [...cart, {quantity:'1',product_id:id}]

      console.log("fnlCart",fnlCart)
    

      fnlCart = fnlCart.map(fc=>{
        if(!fc.product_id){
          return {
            ...fc,
            product_id: fc.product
          }
        }else{
          return fc
        }
      })

      const fnlTotal = inCart ? 
        cart.length==1 ? 0 : Total - amountAfterSubtracting
        :
        Number(Total)+Number(price)

      dispatch(totalAmount(fnlTotal))

      dispatch(editCartRequest({
        payload: {
        "lst": fnlCart
        },
        token: authedUser.token
    }))
      // dispatch(handleToggleCart({
      //     payload: {
      //     quantity:'1',
      //     product_id: id
      //     },
      // },cat)
      // )
    }else{
    dispatch(handleToggleCart({
      payload: {
      quantity:'1',
      product_id: id
      },
      price,
    },cat))
  }
  }

  console.log("activeCategory",{activeCategory})

  const headings = {
    TopSeller: 'Top Sellers',
    New: "New",
    Nicotine: "Nicotines",
    Drink: "Drinks",
    Food: "Foods",
    Snacks: "Snacks",
    Candy: "Candy",
    "Student Essential": "Student Essentials",
    Smokes: "Smokes",
    Vapes: "Vapes"
  }

  const iterators = [
    'TopSeller',
    "New",
    "Nicotine",
    "Drink",
    "Food",
    "Snacks",
    "Candy",
    "Student Essential",
    "Smokes",
    "Vapes"
  ]

    const scrollHandler = () => {
    console.log(iterators.length, scrollToIndex);
    if (iterators.length > scrollToIndex) {
      ref.scrollTo({
        x: 0,
        y: iterators[scrollToIndex - 1],
        animated: true,
      });
    } else {
      alert('Out of Max Index');
    }
  };


  function handleScroll(e) {
    var windowHeight = Dimensions.get('window').height,
          height = e.nativeEvent.contentSize.height,
          offset = e.nativeEvent.contentOffset.y;
    if( windowHeight + offset >= height ){
    console.log('End Scroll ++++++======================')
    setShowSearchBar(true)
    }else if( (height/2)-150 <= windowHeight+offset && windowHeight+offset <= (height/2)+150 ){
      console.log('halfway Scroll ++++++======================')
      setShowSearchBar(true)      
    }
    else{
      setShowSearchBar(false)
    }
    console.log({offset,windowHeight,height,sum:windowHeight+offset});
    
  }

  function setHeading(key){
    return headings[key]
  }

  // {iterators.map((cat,index)=>{
  //   return products[cat].map((data,i)=>{
  //   return <ProductContainer key={i}>
  //     <TouchableOpacity onPress={()=>navigation.navigate('ProductInformation',{
  //     mode:'prodInfo',
  //     prodInfo: data
  //     })} >
  //   <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation',{
  //     mode:'prodInfo',
  //     prodInfo: data
  //     })}>
  //     <Image source={prodInfoIcon} />
  //   </ProductInfoIcon>
  //   <View style={{
  //     width:115,
  //     height:115,
  //     marginLeft:15,
  //     marginTop:19,
  //     justifyContent:'center',
  //     alignItems:'center'
  //     }} >
  //   <ProductImage 
  //     source={{uri:`${data.image}`}} 
  //     style={{width:100,height:100}}
  //     />
  //   </View>
  //   <ProductTitle>{data.name}</ProductTitle>
  //   <View style={{flexDirection:"row"}}>
  //   <FromText>From</FromText>
  //   <ProductPrice>
  //     {data.price}
  //   </ProductPrice>
  //   <TouchableOpacity onPress={()=>handleCartBtn(data._id,category,data.price)}>
  //     {data.inCart ?
  //     <Image source={filledCart} style={{width:25,height:25,marginLeft:10,marginBottom:10}} />:
  //     <Image source={unfilledCart} style={{width:25,height:25,marginLeft:10,marginBottom:10}} />
  //     }
      
  //   </TouchableOpacity>
  //   </View>
  //   </TouchableOpacity>
  // </ProductContainer>
  //   })

  // })}

  return (
    <Wrapper>
        <CategoryWidgetSeparator></CategoryWidgetSeparator>
      <ScrollView 
        onScroll={(e)=>handleScroll(e)}
        scrollEventThrottle={16}
      >
          <ProductsDisplay>
            <ProductsCategory>
              {setHeading(category)}
            </ProductsCategory>
            <ProductsWrapper>
              {activeCategory.map((data,i)=>(
                <ProductContainer key={i}>
                  <TouchableOpacity onPress={()=>navigation.navigate('ProductInformation',{
                  mode:'prodInfo',
                  prodInfo: data
                  })} >
                <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation',{
                  mode:'prodInfo',
                  prodInfo: data
                  })}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <View style={{
                  width:115,
                  height:115,
                  marginLeft:15,
                  marginTop:19,
                  justifyContent:'center',
                  alignItems:'center'
                  }} >

    <ProductImage 
      source={{uri:`${data.image}`}} 
      style={{width:100,height:100}}
      />
    </View>
    <ProductTitle>{data.name}</ProductTitle>
    <View style={{flexDirection:"row"}}>
    <FromText>From</FromText>
    <ProductPrice>
      {data.price}
    </ProductPrice>
    <TouchableOpacity onPress={()=>handleCartBtn(data._id,category,data.price)}>
      {data.inCart ?
      <Image source={filledCart} style={{width:25,height:25,marginLeft:10,marginBottom:10}} />:
      <Image source={unfilledCart} style={{width:25,height:25,marginLeft:10,marginBottom:10}} />
      }
      
    </TouchableOpacity>
    </View>
    </TouchableOpacity>
  </ProductContainer>
              ))}

              
            </ProductsWrapper>
          </ProductsDisplay>
          <View style={{width: '100%',alignItems: 'center', marginTop:25, marginBottom:25}}>
          {/* <Image source={loader}  /> */}
          </View>
          
      </ScrollView>
      {showSearchBar && <BottomSearch />}
    </Wrapper>

  )
}