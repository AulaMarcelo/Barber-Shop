import Image from "next/image";

import { MenuIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button"
import {Card,CardContent} from "@/app/_components/ui/card";

const Header = () => {
    return ( 
       <Card>
        <CardContent className="p-5 justify-between items-center flex flex-row">
          <Image src="/logo.png" alt="Barber" height={22} width={120}/>
          <Button variant="outline" size="icon">
            <MenuIcon size={18} />
          </Button>
        </CardContent>
       </Card>
     );
}
 
export default Header;