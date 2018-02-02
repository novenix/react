import React,{Component} from 'react'
//componente inteligente: container
import HomeLayout from '../components/home-layout'
//lamar las categoriasa mara mostrar en la ui
import Categories from '../../categories/components/categories'
import Related from '../components/related'
class Home extends Component{
    render(){
        return(
            <HomeLayout>
                {/* hijos del home */}
                <Categories categories={this.props.data.categories} />
                <Related/>
            </HomeLayout>
        )
    }
}

export default Home