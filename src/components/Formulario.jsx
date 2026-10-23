const Formulario = () => {

    return (
        <div className="w-full flex flex-col md:flex-row bg-amber-950 min-h-screen items-center" >/
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span
                className="text-[#CF9A5A] text-sm tracking-wider uppercase mb-2">
                    Entre em contato
                </span>
                <h1 
                className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Abra sua Franquia
                </h1>
                <p
                className="text-[#CF9A5A] text-sm md:text-base mb-8">
                    Preencha o formulário abaixo que entraremos em contato com você o mais rápido possível.
                </p>

                <form
                className="grid grid-cols-1 gap-4 mt-4 w-full max-w-md">
                    
                        <input type="text" placeholder="Nome e Sobrenome" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                    
                    
                        <input type="text" placeholder="email@gmail.com" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                    
                    
                        <input type="text" placeholder="(**) ****-****" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                    

                    <div className="flex gap-4">
                        <div className="relative flex items-center">
                            <select name="uf" id="estados" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600">
                                <option value="">Estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>

                        <div>
                            <input type="text" placeholder="Cidade" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                        </div>
                    </div>

                    <div>
                        <select name="como_conheceu" id="como_conheceu" className="w-full bg-[#F5E7DA] rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600">
                            <option value="">Como você conheceu a Tiamate?</option>
                            <option value="google">Instagram</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Propagandas</option>
                            <option value="indicação">Indicação</option>
                        </select>
                    </div>

                    <button
                    type="submit" 
                    className="w-full bg-[#C7794A] hover:bg-amber-700 text-white font-medium py-3 rounded transition-colors duration-300">
                        Cadastre-se
                    </button>
                </form>

            </div>
            
            <div className="w-full md:w-1/2 p-8 md:min-h-screen bg-[url('/coffee.jpg')] bg-cover bg-center">
            </div>
        </div>
     );
}
 
export default Formulario;