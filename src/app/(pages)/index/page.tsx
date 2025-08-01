'use client';
import Card from "../../components/Card/Card";

export default function Index() {
  return (
    <div>
      <div className="flex items-center justify-between p-5 gap-10 ">
        <Card clasName="h-130 w-100 flex flex-col justify-between p-2 gap-2">
          <Card clasName="h-17 flex flex-col p-1 gap-2 border border-[#D9D9D9]">
            <h2>Saudo do mês anterior</h2>           
            <div className="flex gap-2">
              <label htmlFor="saudo" className="w-42">
                Saudo:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm "
              />
            </div>
          </Card>
          <Card clasName="h-33 flex flex-col p-1 gap-2 border border-[#D9D9D9]">
            <h2>Entradas</h2>                       
            <div className="flex gap-2">
              <label htmlFor="salario" className="w-42">
                Salário:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm "
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="outros" className="w-42">
                Outros:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="total" className="w-42">
                Total:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm"
              />
            </div>
          </Card>
          <Card clasName="h-17 flex flex-col p-1 gap-2 border border-[#D9D9D9]">
            <h2>Saídas</h2>           
            <div className="flex gap-2">
              <label htmlFor="saudo" className="w-42">
                Saudo do mês anterior:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm"
              />
            </div>
          </Card>
          <Card clasName="h-25 flex flex-col p-1 gap-2 border border-[#D9D9D9]">
            <h2>Poupança</h2>                       
            <div className="flex gap-2">
              <label htmlFor="Total" className="w-42">
                Total:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm border border-[#D9D9D9]"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="renda" className="w-42">
                renda:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm"
              />
            </div>
          </Card>
          <Card clasName="h-25 flex flex-col p-1 gap-2 border border-[#D9D9D9]">
            <h2>Investimentos</h2>                       
            <div className="flex gap-2">
              <label htmlFor="Total" className="w-42">
                Total:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="renda" className="w-42">
                renda:
              </label>
              <input 
                type="text"
                value={`R$ ${'0,00'}`} 
                className="bg-[#D9D9D9] w-[192] pl-2 rounded-sm"
              />
            </div>
          </Card>       
        </Card>
        {/* Card balanço */}
        <Card clasName="h-130 w-100 flex flex-col justify-between p-2">
          <Card clasName="h-30 bg-[#51A789] flex flex-col p-1">
            <h2>Balanço</h2>
          </Card>
          <Card clasName="h-35 flex flex-col p-1 border border-[#D9D9D9]">
            <h2>Metas</h2>
          </Card>
          <Card clasName="h-35 flex flex-col p-1 border border-[#D9D9D9]">
            <h2>Plano de contas</h2>
          </Card>
        </Card>
      </div>
      <div className="pl-5 pr-5">
        <div className=" h-5 w-full bg-[#D9D9D9] rounded-md"></div>
      </div>
      <div className="flex justify-between pt-5 pl-5">
        <Card clasName="h-55 w-[31%] flex flex-col gap-1 p-1 border border-[#D9D9D9]">
          <h2 className="text-center">Gráfico pizza %</h2>
          <ul>
            <li>Entradas</li>
            <li>Saídas</li>
            <li>Poupança</li>
            <li>Investimentos</li>
          </ul>
        </Card>
        <Card clasName="h-55 w-[31%] flex flex-col gap-1 p-1 border border-[#D9D9D9]">
          <h2 className="text-center">DRE</h2>
          <ul>
            <li>Entradas</li>
            <li>Saídas</li>
            <li>Definições de resultados (Poupança+Investimentos)</li>
            <li>Total</li>
          </ul>
        </Card>
        <Card clasName="h-55 w-[31%] flex flex-col gap-1 p-1 border border-[#D9D9D9]">
          <h2 className="text-center">OBSERVAÇÕES</h2>
          <ul>
            {/* <li>Investimentos</li>
            <li>ou</li>
            <li>Poupança</li> */}
          </ul>
        </Card>
        <div></div>
      </div>
      <div className="flex items-center justify-between p-5">
        <Card clasName="h-55 w-112 flex flex-col gap-1 p-1 border border-[#D9D9D9]">
          <h2 className="text-center">GRÁFICO POUPANÇA</h2>
        </Card>
        <Card clasName="h-55 w-112 flex flex-col gap-1 p-1 border border-[#D9D9D9]">
          <h2 className="text-center">GRÁFICO INVESTIMENTOS</h2>
        </Card>
      </div>
    </div>
  );
}
