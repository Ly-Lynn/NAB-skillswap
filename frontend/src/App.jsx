<<<<<<< HEAD
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-bg-light">
      <Navbar />

      {/* Nội dung chính */}
      <div className="p-10">
        <h1 className="text-3xl font-bold">Hello</h1>
      </div>
    </div>
  );
}

=======
import "./App.css";
import MyNetworkPage from "./pages/private/MyNetwork/page";

function ColorTest() {
	return (
		<div className="space-y-4 p-6">
			<h1 className="text-h2 font-heading">🎨 Color Test</h1>

			<p className="text-primary">text-primary</p>
			<p className="text-primary-dark">text-primary-dark</p>
			<p className="text-primary-medium">text-primary-medium</p>
			<p className="text-primary-light">text-primary-light</p>
			<p className="text-primary-extra-light">text-primary-extraLight</p>

			<p className="text-secondary-red-pink">text-secondary-redPink</p>
			<p className="text-secondary-light-pink">text-secondary-lightPink</p>

			<p className="text-semantic-green">text-semantic-green</p>
			<p className="text-semantic-blue">text-semantic-blue</p>
			<p className="text-semantic-orange">text-semantic-orange</p>

			<div className="w-full h-16 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white flex items-center justify-center rounded">
				Gradient Background
			</div>
		</div>
	);
}

function App() {
	return (
		<div>
			{/* <ColorTest /> */}
			<MyNetworkPage />
		</div>
	);
}

>>>>>>> f1228c0e2ab164a6fe117f78d553c53c526b318d
export default App;
