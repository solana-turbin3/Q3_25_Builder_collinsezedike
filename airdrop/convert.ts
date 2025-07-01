import bs58 from "bs58";
import prompt from "prompt-sync";

function base58_to_wallet() {
	const base58_secret_key = prompt()("Enter your base58 string secret key: ");
	const byte_array_secret_key = bs58.decode(base58_secret_key);
	console.log(byte_array_secret_key);
}

function wallet_to_base58() {
	const string_array_secret_key = prompt()(
		"Enter your byte array secret key: "
	);
	const byte_array_secret_key = Uint8Array.from(
		string_array_secret_key?.trim()
	);
	const base58_secret_key = bs58.encode(byte_array_secret_key);
	console.log(base58_secret_key);
}

base58_to_wallet();
// wallet_to_base58();
