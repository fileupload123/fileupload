<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class ApiController
{
    public function index()
    {
        $number = random_int(0, 100);

        return new Response(
            '<html><body>Lucky number: '.$number.'</body></html>'
        );
    }

    public function upload()
    {
        return new Response('');
    }

}