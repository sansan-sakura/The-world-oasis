import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useState } from "react";

import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [shownForm, setShownForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
        {shownForm && <CreateCabinForm />}
        <Button onClick={() => setShownForm((prev) => !prev)}>Add new Form</Button>
      </Row>
    </>
  );
}

export default Cabins;
