import React from 'react'
import '../styles/SubMenu.css'


{/* setting datas for column menus */ }


const config = [
    {
        label: "shop sunglasses",
        id: "first-sub-menu",
        items: [
            {
                label: "New arrival",
            },
            {
                label: "Best sellers",
            },
            {
                label: "All sunglasses(5.000+)"
            }
        ]
    },
    {
        label: "shop by trends",
        id: "second-sub-menu",
        subCol: true,
        items: [
            {
                label: "SS 2020"
            },
            {
                label: "Milano fashion week"
            },
            {
                label: "Editorial's storied"
            }
        ]
    },
    {
        label: "shop by gender",
        id: "third-sub-menu",
        subCol: true,
        items: [
            {
                label: "sunglasses for her"
            },
            {
                label: "sunglasses for him"
            }
        ]
    },
    {
        label: "Top designers",
        id: "fourth-sub-menu",
        items: [
            {
                label: "Ray-Ban"
            },
            {
                label: "Moscot"
            },
            {
                label: "Gucci"
            },
            {
                label: "CHANEL"
            },
            {
                label: "Etnia Barcelona"
            },
            {
                label: "Garret Leight"
            },
            {
                label: "Oliver peoples"
            },
            {
                label: "Persol"
            },
            {
                label: "Ahlem"
            },
            {
                label: "Eyepetizer"
            },
            {
                label: "All designers(50+)"
            }
        ]
    },
    {
        label: "Shop sunglasses",
        id: "fifth-sub-menu",
        items: [
            {
                label: "Rectangle",
                icon: "ShapeRec"
            },
            {
                label: "Square",
                icon: "ShapeSquare"
            },
            {
                label: "Round",
                icon: "ShapeRound"
            },
            {
                label: "Oval",
                icon: "ShapeOval"
            },
            {
                label: "Mask",
                icon: "ShapeMask"
            },
            {
                label: "Aviator",
                icon: "ShapeAviator"
            },
            {
                label: "Cat-Eye",
                icon: "ShapeCatEye"
            },
            {
                label: "Butterfly",
                icon: "ShapeButterfly"
            },
            {
                label: "Irregular",
                icon: "ShapeIrregular"
            },
            {
                label: "Sport",
                icon: "ShapeSport"
            }
        ]
    }
]


function renderSubMenu(menu) {

    return (<div>
        {menu.subCol ? <div id={menu.id} className="sub-menu-box">
            <div className="sub-menu-title-box" style={{ paddingTop: "0px" }}><a href="#" className="sub-menu-title-style" href="#">{menu.label}</a></div>
            {renderItems(menu.items)}
        </div>
            :
            <div id={menu.id}>
                <div className="sub-menu-title-box" style={{ paddingTop: "0px" }}><a href="#" className="sub-menu-title-style" href="#">{menu.label}</a></div>
                {renderItems(menu.items)}
            </div>}
    </div>)

}


function renderItems(items) {
    return items.map(item => <div key={item.label}>{item.icon && <img src={`./${item.icon}.svg`} />}<a href="#" className="item-style">{item.label}</a></div>)
}


function SubMenu() {


    return (
        <div className="row">


            {/* menus-columns */}
            <div className="col">
                {renderSubMenu(config[0])}
                {renderSubMenu(config[1])}
                {renderSubMenu(config[2])}
            </div>
            <div className="col">
                {renderSubMenu(config[3])}
            </div>
            <div className="col">
                {renderSubMenu(config[4])}
            </div>


            {/*Images columns*/}
            <div className="col" id="image-col">
                <div className="sub-menu-title-box" style={{ paddingTop: "0px" }}><a href="#" className="sub-menu-title-style">New in</a></div>
                <div className="big-box-picture"><img className="big-picture" src="Brooks-2.png"></img></div>
                <div className="caption-picture"><h4 >Titolo archivio</h4></div>
                <div className="small-caption-picture"><h3 >Sottotitolo archivio</h3> </div>
                <div></div>
            </div>

            <div className="col" id="image-col-2">
                <div className="sub-menu-title-box" style={{ paddingTop: "0px" }}><a href="#" className="sub-menu-title-style">Get inspired</a></div>
                <div className="big-box-picture"><img className="big-picture" src="download.png"></img></div>
                <div ><h4 className="caption-picture">Titolo contenuto</h4></div>
                <div ><h3 className="small-caption-picture">Sottotitolo contenuto</h3> </div>
                <div></div>
            </div>
        </div>
    )
}

export default SubMenu