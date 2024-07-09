import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="flex flex-col  px-10 max-w-5xl text-white">
      <Button className="w-fit h-fit bg-gradient-to-r from-[#7B74FF] to-[#C8C7D2]  hover:bg-white text-black text-xl rounded-[10px] flex justify-center items-center font-medium px-12 py-4 mx-auto mb-6">
        Terms and Conditions
      </Button>
      <div className="max-w-4xl mx-auto p-6 ">
        <h1 className="text-3xl font-bold mb-4">Welcome to Safe-X!</h1>
        <p className="mb-6">
          By using our services, you agree to the following terms and
          conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-6">
          Safe-X is a blockchain-based escrow service designed to facilitate
          secure online transactions. By accessing or using Safe-X, you agree to
          comply with and be bound by these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Safe-X</strong>: The blockchain escrow service provided by
            our company.
          </li>
          <li>
            <strong>User</strong>: Any individual or entity using the Safe-X
            service.
          </li>
          <li>
            <strong>Transaction</strong>: Any exchange of value between parties
            using Safe-X.
          </li>
          <li>
            <strong>Parties</strong>: The buyer and seller involved in a
            transaction using Safe-X.
          </li>
          <li>
            <strong>Escrow</strong>: A financial arrangement where a third party
            holds and regulates payment of the funds required for two parties
            involved in a given transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
        <p className="mb-6">
          To use Safe-X, you must be at least 18 years old and legally capable
          of entering into binding contracts.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Account Registration</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Users must create an account to use Safe-X services.</li>
          <li>
            You agree to provide accurate, current, and complete information
            during the registration process and update such information to keep
            it accurate, current, and complete.
          </li>
          <li>
            You are responsible for safeguarding your account password and are
            responsible for all activities that occur under your account.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">5. Services</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Safe-X provides an escrow service for online transactions.</li>
          <li>The service is neutral, impartial, stable, and transparent.</li>
          <li>
            Safe-X is not responsible for the actual transaction or the quality
            of goods or services exchanged.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">6. Fees</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Users agree to pay the fees for the escrow service as specified on
            the Safe-X website.
          </li>
          <li>Fees are non-refundable unless otherwise stated.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">7. Transaction Process</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            The buyer and seller agree to use Safe-X for their transaction.
          </li>
          <li>
            The buyer deposits the agreed amount into the Safe-X escrow account.
          </li>
          <li>
            Safe-X holds the funds until the transaction is completed and both
            parties are satisfied.
          </li>
          <li>
            Upon completion and satisfaction, Safe-X releases the funds to the
            seller.
          </li>
          <li>
            In case of disputes, Safe-X will act as a mediator to resolve the
            issue.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">8. Dispute Resolution</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            If a dispute arises, the parties agree to first attempt to resolve
            the dispute amicably.
          </li>
          <li>
            If the dispute cannot be resolved amicably, Safe-X will intervene
            and make a final decision.
          </li>
          <li>Safe-X's decision will be binding and final.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          9. Prohibited Activities
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Users agree not to use Safe-X for any illegal or unauthorized
            purpose.
          </li>
          <li>Users must not violate any laws in their jurisdiction.</li>
          <li>Users must not interfere with or disrupt the Safe-X service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Safe-X reserves the right to suspend or terminate your account if
            you breach these terms and conditions.
          </li>
          <li>
            You may terminate your account at any time by notifying Safe-X in
            writing.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
