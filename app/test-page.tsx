'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TestPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Test Card 1</h3>
            <p className="text-gray-600 mb-4">This is a test card to check if cards are working properly.</p>
            <Button>Test Button</Button>
          </CardContent>
        </Card>
        
        <Card className="p-6">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Test Card 2</h3>
            <p className="text-gray-600 mb-4">Another test card with different content.</p>
            <Button variant="outline">Another Button</Button>
          </CardContent>
        </Card>
        
        <Card className="p-6">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Test Card 3</h3>
            <p className="text-gray-600 mb-4">Third test card to verify grid layout.</p>
            <Button variant="secondary">Third Button</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}