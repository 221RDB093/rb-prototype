import '../styles/Registration.css'

function Registration() { 
    return (
        <>
            <h1>Reģistrācija</h1>
            <div className="card">
                <br></br>
                <br></br>
                <div className="row">
                    <div className="div">
                        <input type="text" placeholder="Lietotājvārds" className="row1-field"/>
                    </div>
                    <div className="div">
                        <input type="date" id="date" className="row1-field"/>
                        <p>Dzimšanas datums</p>
                    </div>
                    
                </div>

                <div className="row">
                    <input type="text" placeholder="Uzvārds" className="field"/>
                    <input type="text" placeholder="Valsts"className="field"/>
                </div>
                <br></br>
                <div className="row">
                    <input type="text" placeholder="E-pasts" className="field"/>
                    <input type="text" placeholder="Telefona numurs" className="field"/>
                </div>

                <div className="btns">
                    <button className="auth">Reģistrēties</button>
                </div>
            </div>
        </>
    )
}

export default Registration