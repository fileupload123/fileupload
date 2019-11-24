<?php

namespace App\Controller;

use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiController
{
    public function index(): Response
    {
        return new Response('Access allowed');
    }

    public function upload(Request $request, FileUploader $fileUploader): JsonResponse
    {
        $status = 200;
        $response = '';

        try {
            $response = $fileUploader->upload($request->files->get('file'));
        } catch (FileException $e) {
            $response = $e->getMessage();
            $status = 500;
        }

        return new JsonResponse($response, $status);
    }
}
