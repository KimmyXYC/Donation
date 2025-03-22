"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonationPage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const cryptoAddresses = {
    erc20: "0xF0640f6F0181fE5B898B0CB6c0177bFb2AE85460",
    trc20: "TQ35ZmRH3ti6CH4eFPihQ8h7qu9XKFwePb",
  }

  const copyToClipboard = (type: string, address: string) => {
    navigator.clipboard.writeText(address)
    setCopiedAddress(type)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">给 Kimmy 捐赠</h1>
        <p className="text-muted-foreground">我很可爱，请给我钱。</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>加密货币捐赠</CardTitle>
          <CardDescription>将您的捐赠发送到以下地址之一</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="erc20" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="erc20">ERC-20</TabsTrigger>
              <TabsTrigger value="trc20">TRC-20</TabsTrigger>
            </TabsList>

            <TabsContent value="erc20" className="space-y-4">
              <div className="p-4 bg-muted rounded-md">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono break-all">{cryptoAddresses.erc20}</code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard("erc20", cryptoAddresses.erc20)}
                    className="ml-2 flex-shrink-0"
                  >
                    {copiedAddress === "erc20" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="ml-2">{copiedAddress === "erc20" ? "已复制" : "复制"}</span>
                  </Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">支持以太坊网络代币（ETH、USDT、USDC等）在ERC-20上。</div>
            </TabsContent>

            <TabsContent value="trc20" className="space-y-4">
              <div className="p-4 bg-muted rounded-md">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono break-all">{cryptoAddresses.trc20}</code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard("trc20", cryptoAddresses.trc20)}
                    className="ml-2 flex-shrink-0"
                  >
                    {copiedAddress === "trc20" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="ml-2">{copiedAddress === "trc20" ? "已复制" : "复制"}</span>
                  </Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">支持波场网络代币（TRX、USDT等）在TRC-20上。</div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 平台捐赠选项 */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>平台捐赠</CardTitle>
          <CardDescription>通过第三方平台进行捐赠支持</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => window.open("https://afdian.com/a/KimmyXYC", "_blank")}
              className="px-8 py-6 text-base"
              variant="outline"
            >
              前往爱发电捐赠
            </Button>
            <Button
              onClick={() => window.open("https://www.patreon.com/c/kimmyxyc", "_blank")}
              className="px-8 py-6 text-base"
              variant="outline"
            >
              前往 Patreon 捐赠
            </Button>
            <Button
              onClick={() => window.open("https://donate.stripe.com/5kAcQa8Td70gfBe7sx", "_blank")}
              className="px-8 py-6 text-base"
              variant="outline"
            >
              使用 Stripe 捐赠
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>捐赠即意味该行为完全自愿，您无法从中得到任何回报，不接受任何退款申请</p>
      </div>
    </div>
  )
}

