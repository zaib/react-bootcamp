import React,{Component} from 'react';
import AddInline from '../shared/add-inline';
import CategoryListItem from './category.list.item';

import axios from 'axios';

class CategoryList extends Component  {
    
    constructor(props) {
        super(props);


        // component states 
        this.state = { categoryList: null, deleteAbleCategory: null }
    
        // this binding with custom functions
        this.deleteCategory     =   this.deleteCategory.bind(this);
        this.upsertCategory     =   this.upsertCategory.bind(this);
        this.loadCategories     =   this.loadCategories.bind(this);
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories() {
        axios.get('http://localhost:3004/categories?_sort=views&_order=DESC').then((response) => {
            this.setState({categoryList: response.data})
        }).catch((error) => {
            console.log(error);
        })
    }

    deleteCategory(category) {
    
        axios.delete(`http://localhost:3004/categories/${category.id}`).then((response) => {            
            // this.setState({categoryList: [...this.state.categoryList, category]});
            // filter will return an array of all categories except the deletedOne
            // No mutation happening here. filter is returning new array
            let filterCategories = this.state.categoryList.filter((categoryItem) => {
                if(categoryItem.id !== category.id) {
                    return categoryItem;
                }
            });
            // change categoryList state
            this.setState({ categoryList: filterCategories});
        }).catch((error) => {
                console.log(error);
        })    
    }

    upsertCategory(category) {
        axios.post('http://localhost:3004/categories', category).then((response) => {            
            this.setState({categoryList: [response.data, ...this.state.categoryList]});
        }).catch((error) => {
                console.log(error);
        })        

    }
    
    render() {        
        if(!this.state.categoryList){
            return <div className="categories-container">

                <AddInline placeholder="Add New Category" onItemAdd={(category) => {this.upsertCategory(category)} } />
                
                <div className="top-buffer-20">
                    <p>There is no category in the list.</p>
                </div>
            </div>
        } else {
            return (
                <div className="categories-container">
                    
                    <AddInline placeholder="Add New Category" onItemAdd={(category) => {this.upsertCategory(category)} } />
                    
                    <div className="top-buffer-20 category-list list-group">   
                        {
                            this.state.categoryList.map((category) => {
                                return <CategoryListItem key={category.id+'-'+ Math.random()} category={category}  deleteCategory={this.deleteCategory} selectCategory={this.props.selectCategory} />
                            })
                        }
                    </div>
                    
                </div>

            )
        }
    }
}

export default CategoryList;