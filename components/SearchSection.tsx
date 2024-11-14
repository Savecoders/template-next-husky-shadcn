// 'use client';
// import { Input } from '@/components/ui/input';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { useState } from 'react';
// import { Button } from './ui/button';
// import { ApiRoot } from '@/types/api.types';
// import { getData } from '@/lib/getData';

// export function SearchSection() {
//   const [searchCriteria, setSearchCriteria] = useState('IDENTIFICACION');
//   const [data, setData] = useState<ApiRoot | null>(null);
//   const [searchInputValue, setSearchInputValue] = useState('');

//   const handleSearch = async () => {
//     const data = await getData(searchCriteria, searchInputValue);
//     if (data.mensajeError === null) {
//       setData(data);
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-row items-center gap-4">
//         <Input
//           placeholder="Identificacion..."
//           className="w-full p-6"
//           value={searchInputValue}
//           onChange={(e) => setSearchInputValue(e.target.value)}
//         />
//         <Select defaultValue={searchCriteria} onValueChange={setSearchCriteria}>
//           <SelectTrigger className="w-[480px] p-6 text-foreground">
//             <SelectValue />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectLabel>Criterio de busqueda</SelectLabel>
//               <SelectItem value="IDENTIFICACION">Cedula de Identidad</SelectItem>
//               <SelectItem value="CODIGO_UNICO">Codigo Unico</SelectItem>
//               <SelectItem value="NUMERO_CONTRATO">Numero de Contrato</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//         <Button className="p-6" onClick={handleSearch}>
//           Buscar
//         </Button>
//       </div>
//       {data && (
//         <div className="w-full p-6">
//           {data.notificaciones.map(({ detallePlanificacion }) => {
//             return detallePlanificacion.map(({ fechaHoraCorte, horaDesde, horaHasta }, index) => {
//               return (
//                 <div key={index} className="flex flex-col gap-2 rounded-md border p-4">
//                   <p>{fechaHoraCorte}</p>
//                   <p>{horaDesde}</p>
//                   <p>{horaHasta}</p>
//                 </div>
//               );
//             });
//           })}
//         </div>
//       )}
//     </>
//   );
// }
