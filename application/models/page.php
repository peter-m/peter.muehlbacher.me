<?php

class Page
{

	public static function get_page_data($page)
	{
		$query = DB::query('select * from pages where name = ?', array($page));
		$data["content"] 	 = $query[0]->content;
		$data["title"]	 	 = $query[0]->title;
		$data["description"] = $query[0]->description;
		$data["keywords"]    = $query[0]->keywords;
		return $data;
	}

	public static function send_mail($input)
	{
		$recipient  = 'peter@muehlbacher.me';

		$rules = array(
		    'message'  => 'required|max:10000',
		    'from'  => 'required|email|max:50'
		);

		$validation = Validator::make($input, $rules);

		if ($validation->fails())
	    {
	        return Redirect::to('error/email')->with_errors($validation);
	    }

		$subject = $input['subject'];
		$message = $input['message'];
		$from    = $input['from'];

		$header  = 'To: Peter <peter@muehlbacher.me>' . "\r\n";
		$header .= 'From: website visitor <'.$from.'>' . "\r\n";

		if(mail($recipient, $subject, $message, $header)) {
		    return Redirect::to('contact');
		} else {
		    return Redirect::to('error',500)->with_errors($validation);
		}
	}

}