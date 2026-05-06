*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:linear-gradient(to right,#020617,#0f172a);
    font-family:Arial, Helvetica, sans-serif;
    color:white;
    min-height:100vh;
}

.main{
    width:95%;
    margin:auto;
    padding:20px;
}

h1{
    text-align:center;
    margin-bottom:30px;
    color:#00e5ff;
    font-size:45px;
    letter-spacing:2px;
}

.top-panel{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
    margin-bottom:25px;
}

.input-box{
    background:#111827;
    padding:20px;
    border-radius:15px;
    box-shadow:0px 0px 15px rgba(0,229,255,0.2);
}

.input-box label{
    display:block;
    margin-bottom:10px;
    font-weight:bold;
    color:#00e5ff;
}

.input-box input,
.input-box select{
    width:100%;
    padding:12px;
    border:none;
    border-radius:10px;
    font-size:16px;
}

.button-panel{
    display:flex;
    justify-content:center;
    gap:20px;
    margin-bottom:30px;
    flex-wrap:wrap;
}

button{
    padding:14px 25px;
    border:none;
    border-radius:12px;
    background:#00e5ff;
    color:black;
    font-weight:bold;
    cursor:pointer;
    transition:0.3s;
    font-size:16px;
}

button:hover{
    transform:scale(1.08);
}

#bars-container{
    height:450px;
    background:#111827;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    gap:10px;
    padding:20px;
    overflow-x:auto;
    margin-bottom:35px;
    box-shadow:0px 0px 20px rgba(0,229,255,0.2);
}

.bar{
    width:60px;
    border-radius:10px 10px 0 0;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    color:black;
    font-weight:bold;
    transition:0.4s;
}

.bottom-panel{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
}

.card{
    background:#111827;
    padding:20px;
    border-radius:15px;
    box-shadow:0px 0px 15px rgba(0,229,255,0.2);
}

.card h2{
    color:#00e5ff;
    margin-bottom:15px;
}

.card p{
    line-height:1.8;
}
