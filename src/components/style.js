import styled from "styled-components"

/* ------------GENERIC COMPONENTS------------ */
export const TopBar = styled.div`
    background-color:rgba(218, 214, 214, 0.836);
    width:100%;
    height:57px;
    display:flex;
    justify-content:center;
    span{
        background-color:rgba(0.0.0.);
        height:100px;
        width:20%;
        cursor:pointer;
        display:flex;
        justify-content:flex-end;
    }
    div{
        display:flex;
        justify-content:center;
        width:70%;
    }
    button{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        width:15%;
        max-width:130px;
    }
    a{
        width:3%;
    }
`;
export const UserInputS = styled.div`
    background-color:white;
    width:auto;
    height:auto;
    display:flex;
    justify-content:flex-start;
    border:none;
    input{
        margin-left:10px;
        height:30px;
        width:${props =>`${props.width}%`};
        border:none;
    }
`;
export const LoginFormS = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    background-color:red;
    width:250px;
    height:280px;
    border-radius:30px;
    background-color:rgba(243, 239, 239, 0.685);
    form{
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        height:50%;
        button{
            height:35px;
            background-color:rgb(60, 81, 202);
            border:none;
            border-radius:5px;
            color:white;
            font-size:20px;
        }
    }
    span{
        display:flex;
        flex-wrap:wrap ;
        justify-content:center;

        img{
            border:solid 1px black;
            border-radius:200px;
        }
        h3{
            margin:0px;
            width:100%;
            text-align:center;
            color:black;
        }
    }
`;
/* ------------------ADD USER----------- */
export const AddBody =styled.div`
    width:100%;
    background-image:linear-gradient(to top,gray,silver,white);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const UserForm = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    background-color:red;
    width:600px;
    height:400px;
    border-radius:30px;
    background-color:rgba(243, 239, 239, 0.685);
    form{
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        height:90%;
        width:95%;
        button{
            height:35px;
            background-color:rgb(60, 81, 202);
            border:none;
            border-radius:5px;
            color:white;
            font-size:20px;
        }
    }
`;
/* -------------------LOGIN------------- */
export const LoginBody =styled.div`
    width:100%;
    background-image:linear-gradient(to top,gray,silver,white);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;
/* --------------LIST USERS----------- */
export const ListBody =styled.div`
    width:100%;
    background-image:linear-gradient(to top,gray,silver,white);
    height:auto;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:nowrap;
`;
export const ListContainer =styled.div`
    margin-top:50px;
    width:95%;
    background-color:rgba(200, 202, 60, 0.658);
    height:auto;
    display:flex;
    align-items:top;
    justify-content:center;
    padding:5px;
    flex-wrap:wrap;
`;
export const List =styled.div`
    width:100%;
    background-color:rgba(200, 202, 60, 0.658);
    height:auto;
    display:flex;
    align-items:top;
    flex-direction:column;
    justify-content:flex-start;
    padding:5px;
`;
export const ListHeader =styled.div`
    background-color:white;
    align-items:center;
    display:flex;
    justify-content:space-around;
    width:100%;
    height:50px;
    h2{
        color:black;
        margin:0px;
        width:25%;
    }
`
export const ListRow =styled.div`
    background-color:white;
    align-items:center;
    display:flex;
    justify-content:space-around;
    width:100%;
    height:auto;
    background-color:gray;
    margin-bottom:1px;
    span{
        margin-left:5px;
        width:25%;
        overflow:hidden;
        text-overflow:ELLIPSIS;
        height:100%;
        min-height:40px;
        display:flex;
        align-items:center;
        color:white;
    }
    
`;
export const ToolsListBarS =styled.div`
    width:100%;
    height:50px;
    display:flex;
`;
export const SearchBar =styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items:center;
    form{
        display:flex;
        align-items:center;
        input{
            height:30px;
            border-radius:5px;
        }
        button{
            background-color:rgba(200, 202, 60, 0);
            border:none;
            outline: thin dotted;
            outline: 0px auto -webkit-focus-ring-color;
            outline-offset: 0px;
            cursor:pointer;
            img{
            background-color:rgba(200, 202, 60, 0);
        }
        }
       
    }
`;
export const Pages =styled.div`
    width:50%;
    height:100%;
    display:flex;
`;

