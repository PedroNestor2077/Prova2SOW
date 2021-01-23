import styled from "styled-components"

/* ------------GENERIC COMPONENTS------------ */
export const TopBar = styled.div`
    background-color:rgba(32, 32, 32, 0.834);
    width:100%;
    height:80px;
    display:flex;
    justify-content:center;
    span{
        margin-top:3px;
        background-color:white;
        height:90px;
        width:200px;
        border-radius:100px 0px;
        min-width:180px;
        cursor:pointer;
        display:flex;
        justify-content:center;
        box-shadow:5px 5px 10px rgba(0, 0, 222, 0.634);
        img{
            pointer-events:none;
        }
    }
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:70%;
            button{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            width:50%;
            max-width:130px;
            color:white;
            font-size:20px;
            background-color:transparent;
            outline: thin dotted;
            outline: 0px auto -webkit-focus-ring-color;
            outline-offset: 0px;
            height:50%;
            border:none;
            cursor:pointer;
                img{
                    margin-right:5px;
                }            
    }
    }
    form{
        position:fixed;
        top:0px;
        right:0px;
        padding:5px;
    }
    a{
        text-decoration:none;
        color:white;
        font-size:1.3em;
        &:hover{
            text-decoration:underline;
        }
        &:active{
            color:black;
        }
    }
`;
export const UserInputS = styled.span`
    width:100%;
    height:50px;
    display:flex;
    justify-content:flex-start;
    border:none;
    background-color:white;
    align-items:center;
    flex-wrap:nowrap;
    margin-top:10px;
    min-width:100%;
    padding-left:5px;
    border-radius:5px;
    input{
        height:80%;
        width:100%;
        border:none;
        margin-left:10px;
        margin-right:10px;
        outline:none;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
        font-size:20px;
        &:focus{
            box-shadow:0px 0px 10px 2px rgba(0, 0, 255, 0.788);
        }
    }
`;
/* ------------------ADD USER----------- */
export const AddBody =styled.div`
    width:100%;
    background-color:white;
    height:auto;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:nowrap;;
`;
export const UserForm = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    width:90%;
    height:100%;
    border-radius:30px;
    background-color:rgb(192, 188, 188);
    padding:20px;
    margin-top:30px;
    div{
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        height:100%;
        width:95%;
        align-items:center;
        button{
            width:30%;
            height:45px;
            background-color:rgb(60, 81, 202);
            border:none;
            border-radius:5px;
            color:white;
            font-size:20px;
            margin-top:10px;
            cursor:pointer;
            outline: thin dotted;
            outline: 0px auto -webkit-focus-ring-color;
            outline-offset: 0px;
            box-shadow:2px 2px 2px 1px rgba(0,0,0,.5);
            &:hover{
                background-color:blue;
                text-shadow:2px 2px black;
                box-shadow:2px 2px 2px 1px rgba(0,0,0,.7);
            }
        }
    }
`;
/* -------------------LOGIN------------- */
export const LoginBody =styled.div`
    width:100%;
    background-color:white;
    height:auto;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:nowrap;
`;
export const LoginFormS = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    width:30%;
    height:100%;
    border-radius:30px;
    background-color:rgb(192, 188, 188);
    margin-top:30px;
    padding:10px;
    div{
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        height:90%;
        width:95%;
        button{
            height:45px;
            background-color:rgb(60, 81, 202);
            border:none;
            border-radius:5px;
            color:white;
            font-size:20px;
            margin-top:10px;
            cursor:pointer;
            outline: thin dotted;
            outline: 0px auto -webkit-focus-ring-color;
            outline-offset: 0px;
            box-shadow:2px 2px 2px 1px rgba(0,0,0,.5);
            &:hover{
                background-color:blue;
                text-shadow:2px 2px black;
                box-shadow:2px 2px 2px 1px rgba(0,0,0,.7);
            }
        }
    }
`;
/* --------------LIST USERS----------- */
export const ListBody =styled.div`
    width:100%;
    background-color:white;
    height:auto;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:nowrap;
`;
export const ListContainer =styled.div`
    margin-top:30px;
    width:95%;
    background-color:white;
    height:80vh;
    display:flex;
    align-items:top;
    justify-content:flex-start;
    padding:5px;
    flex-wrap:wrap;
`;
export const List =styled.div`
    width:100%;
    background-color:white;
    border:solid black 3px;
    height:90%;
    display:flex;
    align-items:top;
    flex-direction:column;
    justify-content:flex-start;
    align-items:top;
    padding:5px;
    border-radius:4px;
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
    height:40px;
    background-color:rgb(226, 223, 223);
    margin-top:2px;
    border-top:solid black 1px;
    span{  
        width:25%;
        margin-left:5px;
        overflow:hidden;
        text-overflow:ELLIPSIS;
        height:100%;
        min-height:39px;
        display:flex;
        align-items:center;
        color:black;
        justify-content:flex-start;
        button{
            background-color:transparent;
            border:none;
            outline: thin dotted;
            outline: 0px auto -webkit-focus-ring-color;
            outline-offset: 0px;
            cursor:pointer;
            &:hover{
                position:relative;
                bottom:3px;
            }
        }
    }  
    &:hover{
        box-shadow:0px 0px 5px 2px rgba(0,0,0,.6);
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
    div{
        display:flex;
        align-items:center;
        input{
            height:30px;
            border-radius:5px;
            font-size:20px;
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
    justify-content:flex-end;
    span{
        width:100%;
        display:flex;
        height:100%;
        color:black;
        align-items:center;
        justify-content:flex-end;
        button{
            height:50%;
        }
        p{
            font-size:20px;
            margin-right:5px;
            margin-left:5px;
        }
    }
`;
export const EditPageS =styled.button`
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(59, 59, 59, 0.801);
    h3{
        width:100%;
    }
    div{
        background-color:gray;
        display:flex;
        justify-content:center;
        flex-direction:column;
        border-radius:10px;
        width:auto;
        a{
            position:relative;
            left:44%;
            top:3px;
        }
    }

`;


