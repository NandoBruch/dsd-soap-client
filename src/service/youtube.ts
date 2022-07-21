import axios, { AxiosResponse } from "axios";

const baseUrl = "http://127.0.0.1:9876/youtube?wsdl";
export const search = async (query: string): Promise<AxiosResponse<any>> =>
  axios.post(
    baseUrl,
    `<soapenv:Envelope
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:urn="http://soapserver.mycompany.com/">
	<soapenv:Header/>
	<soapenv:Body>
		<urn:search>
			<arg0>${query}</arg0>
		</urn:search>
	</soapenv:Body>
    </soapenv:Envelope>`,
    { headers: { "Content-Type": "text/xml" } }
  );

export const searchv2 = async (query: string): Promise<AxiosResponse<any>> =>
  axios.get(`http://localhost:3001/search/${query}`);
